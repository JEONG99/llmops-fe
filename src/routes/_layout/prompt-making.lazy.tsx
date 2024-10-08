import { createLazyFileRoute, useRouterState } from "@tanstack/react-router";
import { z } from "zod";
import { useEffect, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { ClipLoader } from "react-spinners";
import { Trash2 } from "lucide-react";

import PageLayout from "@/components/layout/page-layout";
import DataSelect from "@/components/prompt-making/data-select";
import { Slider } from "@/components/ui/custom-slider";
import { Textarea } from "@/components/ui/textarea";
import { useModalStore } from "@/hooks/use-modal-store";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn, getFormatToday } from "@/lib/utils";
import ModelSelect from "@/components/prompt-making/model-select";
import { Model } from "@/types";
import { useModelStore } from "@/hooks/use-model-store";
import { usePromptStore } from "@/hooks/use-prompt-store";
import ActionTooltip from "@/components/common/action-tootip";

export const Route = createLazyFileRoute("/_layout/prompt-making")({
  component: PromptMakingPage,
});

const formSchema = z.object({
  title: z.string().min(1, "프롬프트명을 입력해 주세요."),
  description: z.string().min(1, "프롬프트 설명을 입력해 주세요."),
  base_model: z.string().min(1, "모델을 선택해 주세요."),
  instruction: z.string().min(1, "모델 설명을 입력해 주세요."),
  data: z.string(),
  temperature: z.number(),
  samples: z
    .array(
      z.object({
        input: z.string().min(1, "샘플 인풋을 입력해 주세요."),
        output: z.string().min(1, "샘플 아웃풋을 입력해 주세요"),
      })
    )
    .nonempty("샘플을 하나 이상 입력해 주세요."),
});

const SAMPLE_RESULT =
  "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 자연스러운 연출이 가능합니다.";

function PromptMakingPage() {
  const {
    location: {
      state: { model, prompt, isEdit },
    },
  } = useRouterState();

  const { onOpen } = useModalStore();
  const { models } = useModelStore();
  const { addPrompt, updatePrompt } = usePromptStore();

  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<{
    prompt: {
      title: string;
      description: string;
      base_model: Model;
      instruction: string;
      data: string;
      temperature: number;
      samples: { input: string; output: string }[];
    } | null;
    text: string;
  }>({ prompt: null, text: "" });

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      description: "",
      base_model: "",
      instruction: "",
      data: "",
      temperature: 0,
      samples: [{ input: "", output: "" }],
    },
  });

  const { fields, append, remove, replace } = useFieldArray({
    control: form.control,
    name: "samples",
  });

  useEffect(() => {
    form.reset({
      title: prompt?.title ?? "",
      description: prompt?.description ?? "",
      base_model: prompt
        ? prompt.base_model.id + ""
        : model?.id
          ? model.id + ""
          : "",
      instruction: prompt?.instruction ?? "",
      data: prompt?.data ?? "",
      temperature: prompt?.temperature ?? 0,
      samples: prompt?.samples ?? [{ input: "", output: "" }],
    });
    replace(prompt?.samples ?? [{ input: "", output: "" }]);
  }, [prompt, model, form]);

  const addSample = () => {
    append({ input: "", output: "" });
  };

  const removeSample = (index: number) => {
    remove(index);
  };

  const onReset = () => {
    form.reset();
    setResult({ prompt: null, text: "" });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    const model = models.find(
      (model) => model.id === Number(values.base_model)
    );
    if (!model) return;

    console.log("Form submitted:", { ...values, base_model: model });

    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);
    setResult({
      prompt: { ...values, base_model: model },
      text: SAMPLE_RESULT,
    });
  };

  const onSave = () => {
    if (!result.prompt) {
      alert("저장할 결과가 없습니다.");
      return;
    }
    if (isEdit) {
      if (!prompt) return;
      updatePrompt({
        ...prompt,
        ...result.prompt,
        created_at: getFormatToday(),
        result: result.text,
      });
      console.log("Edit prompt submitted:", result);
    } else {
      addPrompt({
        ...result.prompt,
        id: Math.floor(Math.random() * (100000 - 10 + 1)) + 10,
        created_at: getFormatToday(),
        result: result.text,
        checked: false,
      });
      console.log("new prompt added:", result);
    }
    onOpen("redirect", {
      redirectData: {
        title: "프롬프트 저장 완료",
        description: "저장한 프롬프트는 갤러리에서 확인 가능합니다.",
        buttonText: "갤러리로 이동",
        path: "/prompt-gallery",
      },
    });
  };

  const checkFields = () => {
    const { title, description, base_model, instruction, samples } =
      form.getValues();

    const hasEmptyFields = (
      samples: { input: string; output: string }[]
    ): boolean => {
      return samples.some(
        (sample) => sample.input.trim() === "" || sample.output.trim() === ""
      );
    };

    if (!title) {
      alert("모델명을 입력해 주세요.");
      return;
    } else if (!description) {
      alert("모델 설명을 입력해 주세요.");
      return;
    } else if (!base_model) {
      alert("모델을 선택해 주세요.");
      return;
    } else if (!instruction) {
      alert("명령을 입력해 주세요.");
      return;
    } else if (hasEmptyFields(samples)) {
      alert("샘플을 모두 입력해 주세요.");
      return;
    }
  };

  return (
    <PageLayout
      title="프롬프트 만들기"
      headerContent={
        <div className="flex items-end h-full">
          <button
            type="button"
            disabled={loading}
            onClick={() => onOpen("loadPrompt")}
            className="flex items-center justify-center gap-2 w-[177px] h-12 rounded-[10px] bg-blue-light hover:bg-blue-light/70"
          >
            <img src="/icon/download-icon.svg" alt="" className="size-6" />
            <span>프롬프트 불러오기</span>
          </button>
        </div>
      }
    >
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="px-7">
            <div className="space-y-3 pt-6 pb-12">
              <FormField
                control={form.control}
                name="title"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        disabled={loading}
                        placeholder="프롬프트명을 입력해 주세요."
                        className="px-6 w-full h-[60px] rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 focus:outline-none placeholder:text-black/60 placeholder:font-normal text-lg font-bold disabled:opacity-50 disabled:cursor-not-allowed"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="description"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea
                        {...field}
                        disabled={loading}
                        placeholder="프롬프트에 대해 설명해 주세요."
                        className="min-h-[74px] h-[74px] px-6 py-6 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 resize-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-8">
              <div className="flex-1">
                <div className="space-y-8">
                  <div>
                    <h4 className="mb-6 text-lg">Base Model</h4>
                    <FormField
                      control={form.control}
                      name="base_model"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <ModelSelect
                              value={field.value}
                              onChange={field.onChange}
                              disabled={loading}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <h4 className="mb-6 text-lg">Instruction</h4>
                    <FormField
                      control={form.control}
                      name="instruction"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <Textarea
                              {...field}
                              disabled={loading}
                              placeholder="ex) 주어진 패션 상품에 어울리는 상품 설명을 만드시오."
                              className="min-h-[125px] h-[125px] px-6 py-6 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 text-base resize-none"
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <h4 className="mb-6 text-lg">Data set</h4>
                    <FormField
                      control={form.control}
                      name="data"
                      render={({ field }) => (
                        <FormItem>
                          <FormControl>
                            <DataSelect
                              value={field.value}
                              onChange={field.onChange}
                              disabled={loading}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div>
                    <h4 className="mb-7 flex items-center gap-2 text-lg ">
                      temperature
                      <button
                        type="button"
                        onClick={() => onOpen("temperature")}
                        className="hover:opacity-80"
                      >
                        <img
                          src="/icon/info-icon.svg"
                          alt=""
                          className="size-6"
                        />
                      </button>
                    </h4>
                    <FormField
                      control={form.control}
                      name="temperature"
                      render={({ field }) => (
                        <FormItem className="relative space-y-0">
                          <FormControl>
                            <Slider
                              disabled={loading}
                              defaultValue={[field.value]}
                              onValueChange={(value) =>
                                field.onChange(value[0])
                              }
                              max={2}
                              step={0.01}
                              className="w-full"
                            />
                          </FormControl>
                          <div className="absolute -bottom-10 flex justify-between w-full">
                            <span className="text-[#858585] text-xs">0</span>
                            <span className="text-[#858585] text-xs">2</span>
                          </div>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className="flex gap-4 pt-24">
                  <button
                    type="button"
                    onClick={onReset}
                    disabled={loading}
                    className="flex items-center justify-center w-[107px] h-12 rounded-[10px] bg-[#E6E6E6] hover:bg-[#E6E6E6]/80"
                  >
                    초기화
                  </button>
                  <button
                    type="submit"
                    disabled={loading}
                    onClick={checkFields}
                    className="relative flex items-center justify-center flex-1 h-12 rounded-[10px] bg-blue hover:bg-blue/90"
                  >
                    <ClipLoader
                      className={cn(
                        "absolute left-10",
                        loading ? "inline-block" : "!hidden"
                      )}
                      size={20}
                    />{" "}
                    실행하기
                  </button>
                </div>
              </div>
              <div className="flex-1 space-y-8">
                {fields.map((field, index) => (
                  <div key={field.id} className="space-y-8">
                    <div>
                      <h4 className="flex justify-between items-center mb-6 text-lg">
                        Sample input {index > 0 && `${index + 1}`}
                        {index > 0 && (
                          <ActionTooltip side="left" title="샘플 제거하기">
                            <button
                              type="button"
                              onClick={() => removeSample(index)}
                              className="hover:opacity-50"
                            >
                              <Trash2 className="size-5" />
                            </button>
                          </ActionTooltip>
                        )}
                      </h4>
                      <FormField
                        control={form.control}
                        name={`samples.${index}.input`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <input
                                {...field}
                                disabled={loading}
                                placeholder="ex) 그래픽,네이비,레터링,코튼"
                                className="h-[77px] w-full px-6 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 focus:outline-none placeholder:text-black/50 text-base text-black/70 resize-none disabled:opacity-50 disabled:cursor-not-allowed"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                    <div>
                      <h4 className="mb-6 text-lg ">
                        Sample output {index > 0 && `${index + 1}`}
                      </h4>
                      <FormField
                        control={form.control}
                        name={`samples.${index}.output`}
                        render={({ field }) => (
                          <FormItem>
                            <FormControl>
                              <Textarea
                                {...field}
                                disabled={loading}
                                placeholder="ex) 스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다."
                                className="min-h-[229px] h-[229px] px-6 py-7 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 text-base text-black/70 resize-none"
                              />
                            </FormControl>
                          </FormItem>
                        )}
                      />
                    </div>
                  </div>
                ))}
                <button
                  type="button"
                  disabled={loading}
                  onClick={addSample}
                  className="mt-6 flex items-center gap-3"
                >
                  <img src="/icon/add-icon.svg" alt="" className="size-6" />
                  <span className="text-sm">샘플 추가하기</span>
                </button>
              </div>
              <div className="flex-1">
                <div className="flex flex-col h-[610px] py-10 px-11 rounded-[10px] bg-[#F1F4FF]">
                  <h5 className="mb-[69px] text-lg  text-center">결과 화면</h5>
                  {loading ? (
                    <div className="flex justify-center h-full">
                      <ClipLoader size={36} />
                    </div>
                  ) : (
                    <div className="overflow-y-scroll">
                      <p className="text-lg text-[#060606]/70">{result.text}</p>
                    </div>
                  )}
                </div>
                <button
                  type="button"
                  onClick={onSave}
                  disabled={loading}
                  className="mt-5 flex justify-center items-center w-full h-12 rounded-[10px] bg-blue hover:bg-blue/90"
                >
                  저장하기
                </button>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </PageLayout>
  );
}
