import { createFileRoute } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { useFieldArray, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import PageLayout from "@/components/layout/page-layout";
import { Textarea } from "@/components/ui/textarea";
import { usePlaygroundHistoryStore } from "@/hooks/use-playground-history-store";
import { PlaygroundHistory } from "@/types";
import HistoryItem from "@/components/playground/history-item";
import PromptForm from "@/components/playground/prompt-form";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { cn, getFormatToday } from "@/lib/utils";
import { useModelStore } from "@/hooks/use-model-store";

export const Route = createFileRoute("/_layout/playground")({
  component: PlaygroundPage,
});

const OUTPUTS = [
  [
    "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
  ],
  [
    "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
    "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 자연스러운 연출이 가능합니다.",
  ],
  [
    "스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한 네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어 있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운 핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를 연출하기 좋습니다.",
    "개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다. 깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와 자연스러운 연출이 가능합니다.",
    "심플한 디자인의 네이비 반소매 티셔츠로, 부드러운 코튼 소재가 편안한 착용감을 제공합니다. 유니크한 그래픽과 레터링이 포인트가 되어 다양한 코디에 쉽게 어울립니다.",
  ],
];

const formSchema = z.object({
  prompts: z
    .array(
      z.object({
        model: z.string().min(1, "모델을 선택해 주세요."),
        instruction: z.string().min(1, "모델 설명을 입력해 주세요."),
      })
    )
    .nonempty("모든 프롬프트 정보를 입력해 주세요."),
  input: z.string().min(1, "인풋을 입력해 주세요."),
});

function PlaygroundPage() {
  const { models } = useModelStore();
  const { histories, addHistory } = usePlaygroundHistoryStore();
  const historiesObject = useMemo(() => {
    const result: {
      one: PlaygroundHistory[];
      two: PlaygroundHistory[];
      three: PlaygroundHistory[];
    } = { one: [], two: [], three: [] };
    for (const history of histories) {
      const length = history.prompts.length;
      switch (length) {
        case 1:
          result.one.push(history);
          break;
        case 2:
          result.two.push(history);
          break;
        case 3:
          result.three.push(history);
          break;
        default:
          console.log("History length error");
      }
    }
    return result;
  }, [histories]);

  const [selectedId, setSelectedId] = useState<number | null>(null);
  const [loading, setLoading] = useState(false);
  const [outputs, setOutputs] = useState<string[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      prompts: [{ model: "", instruction: "" }],
      input: "",
    },
  });

  const { fields, append, remove } = useFieldArray({
    control: form.control,
    name: "prompts",
  });

  const addPrompt = () => {
    if (fields.length >= 3) return;
    append({ model: "", instruction: "" });
  };

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("form submitted:", values);
    setLoading(true);
    await new Promise((resolve) => setTimeout(resolve, 2000));
    setLoading(false);

    const id = Math.floor(Math.random() * (100000 - 10 + 1)) + 10;
    setSelectedId(id);

    const outputs = OUTPUTS[values.prompts.length - 1];
    setOutputs(outputs);

    const prompts = values.prompts.map((prompt, index) => ({
      base_model: models.find((model) => model.id + "" === prompt.model)!,
      instruction: prompt.instruction,
      output: outputs[index],
    }));
    addHistory({
      id,
      created_at: getFormatToday(true),
      input: values.input,
      prompts,
    });
  };

  const checkFields = () => {
    const { input, prompts } = form.getValues();

    const hasEmptyFields = (
      prompts: { model: string; instruction: string }[]
    ): boolean => {
      return prompts.some(
        (prompt) =>
          prompt.model.trim() === "" || prompt.instruction.trim() === ""
      );
    };

    if (hasEmptyFields(prompts)) {
      alert("프롬프트 필드를 모두 입력해 주세요.");
      return;
    } else if (!input) {
      alert("인풋을 입력해 주세요.");
      return;
    }
  };

  const loadHistory = (history: PlaygroundHistory) => {
    if (history.id === selectedId) {
      setSelectedId(null);
      setOutputs([]);
      form.reset({
        input: "",
        prompts: [{ model: "", instruction: "" }],
      });
      return;
    }
    setSelectedId(history.id);
    form.reset({
      input: history.input,
      prompts: history.prompts.map((prompt) => ({
        model: prompt.base_model.id + "",
        instruction: prompt.instruction,
      })),
    });
    setOutputs(history.prompts.map((prompt) => prompt.output));
  };

  return (
    <PageLayout title="플레이 그라운드">
      <div className="flex gap-6 px-9 pt-5">
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="flex-1">
            <div>
              <div className="mb-8 flex justify-end">
                <button
                  type="button"
                  onClick={addPrompt}
                  disabled={fields.length >= 3 || loading}
                  className="flex items-center justify-center gap-4 w-[165px] h-12 rounded-[10px] bg-blue-light hover:bg-blue-light/70 disabled:cursor-not-allowed disabled:hover:bg-blue-light"
                >
                  <img
                    src="/icon/circle-arrow-right-icon.svg"
                    alt=""
                    className="size-6"
                  />
                  <span>비교 추가하기</span>
                </button>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  {fields.map((field, index) => (
                    <PromptForm
                      key={field.id}
                      title={`프롬프트 ${index === 0 ? "A" : index === 1 ? "B" : "C"}`}
                      removePrompt={
                        index === 0 ? undefined : () => remove(index)
                      }
                      name={`prompts.${index}`}
                      control={form.control}
                      output={outputs[index]}
                      loading={loading}
                    />
                  ))}
                </div>
                <FormField
                  control={form.control}
                  name="input"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <div>
                          <h4 className="mb-4">Input</h4>
                          <div
                            className={cn(
                              "flex flex-col justify-between min-h-[156px] pt-7 pl-8 pr-5 pb-5 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20",
                              loading && "opacity-70"
                            )}
                          >
                            <Textarea
                              {...field}
                              disabled={loading}
                              placeholder="ex) 주어진 패션 상품에 어울리는 상품 설명을 만드시오."
                              className="flex-1 min-h-0 p-0 bg-inherit border-none placeholder:text-black/50 text-black/70 text-lg resize-none disabled:opacity-100"
                            />
                            <div className="flex justify-end">
                              <button
                                type="submit"
                                onClick={checkFields}
                                disabled={loading}
                                className="flex items-center h-12 px-11 rounded-[10px] bg-blue hover:bg-blue/90 disabled:cursor-not-allowed disabled:hover:bg-blue"
                              >
                                생성하기
                              </button>
                            </div>
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
            </div>
          </form>
        </Form>
        <div className="w-[330px]">
          <div className="flex justify-center items-end h-12">
            <span className="text-lg">히스토리</span>
          </div>
          <div className="mt-9 space-y-[66px]">
            <div>
              <div className="flex items-center">
                <div className="flex-1 text-center">프롬프트 A</div>
              </div>
              <div className="mt-9 space-y-2.5">
                {historiesObject["one"].map((history) => (
                  <HistoryItem
                    key={history.id}
                    history={history}
                    checked={history.id === selectedId}
                    onClickHistory={() => loadHistory(history)}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex-1 text-center">프롬프트 A</div>
                <span className="text-lg text-black/30">vs</span>
                <div className="flex-1 text-center">프롬프트 B</div>
              </div>
              <div className="mt-9 space-y-2.5">
                {historiesObject["two"].map((history) => (
                  <HistoryItem
                    key={history.id}
                    history={history}
                    checked={history.id === selectedId}
                    onClickHistory={() => loadHistory(history)}
                  />
                ))}
              </div>
            </div>
            <div>
              <div className="flex items-center">
                <div className="flex-1 text-center">프롬프트 A</div>
                <span className="text-lg text-black/30">vs</span>
                <div className="flex-1 text-center">프롬프트 B</div>
                <span className="text-lg text-black/30">vs</span>
                <div className="flex-1 text-center">프롬프트 C</div>
              </div>
              <div className="mt-9 space-y-2.5">
                {historiesObject["three"].map((history) => (
                  <HistoryItem
                    key={history.id}
                    history={history}
                    checked={history.id === selectedId}
                    onClickHistory={() => loadHistory(history)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
