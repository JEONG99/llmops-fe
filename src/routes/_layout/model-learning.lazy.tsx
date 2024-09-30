import { createLazyFileRoute, useRouterState } from "@tanstack/react-router";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import PageLayout from "@/components/layout/page-layout";
import ChoiceTuningMethod from "@/components/model-learning/choice-tuning-method";
import LearningDataConfig from "@/components/model-learning/learning-data-config";
import ModelSelect from "@/components/model-learning/model-select";
import VerificationDataConfig from "@/components/model-learning/verification-data-config";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  CustomAccordionTrigger,
} from "@/components/ui/accordion";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { CustomSwitch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { baseModels, tuningMethods } from "@/types";
import TuningSlider from "@/components/model-learning/tuning-slider";
import { useModalStore } from "@/hooks/use-modal-store";
import { useModelStore } from "@/hooks/use-model-store";
import { getFormatToday } from "@/lib/utils";

export const Route = createLazyFileRoute("/_layout/model-learning")({
  component: ModelLearningPage,
});

const formSchema = z.object({
  name: z.string().min(1, { message: "모델명을 입력해 주세요." }),
  description: z.string().min(1, { message: "모델 설명을 입력해 주세요." }),
  base_model: z.enum(baseModels),
  tuning_method: z.enum(tuningMethods),
  batch_size: z.number().min(0).max(10),
  learning_rate: z.number().min(0).max(10),
  epochs: z.number().min(0).max(10),
  beta1: z.number().min(0).max(1),
  beta2: z.number().min(0).max(1),
  epsilon: z.number().min(0).max(1),
  weight_decay: z.number().min(0).max(1),
  learning_data: z.string().min(1, { message: "학습 데이터를 첨부해 주세요." }),
  verification_data: z
    .string()
    .min(1, { message: "검증 데이터를 첨부해 주세요." }),
  amsgrad: z.boolean().default(false),
});

function ModelLearningPage() {
  const {
    location: {
      state: { model },
    },
  } = useRouterState();

  const { onOpen } = useModalStore();
  const { addModel } = useModelStore();

  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      description: "",
      base_model: model?.base_model ?? "llama-3",
      tuning_method: model?.tuning_method ?? "LoRA",
      batch_size: model?.batch_size ?? 8,
      learning_rate: model?.learning_rate ?? 0.001,
      epochs: model?.epochs ?? 3,
      beta1: model?.beta1 ?? 0.9,
      beta2: model?.beta2 ?? 0.999,
      epsilon: model?.epsilon ?? 0.000001,
      weight_decay: model?.weight_decay ?? 0,
      learning_data: model?.learning_data ?? "",
      verification_data: model?.verification_data ?? "",
      amsgrad: false,
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    console.log("Form submitted:", values);
    addModel({
      ...values,
      created_at: getFormatToday(),
      tags: "마취과",
      status: "progress",
      id: Math.floor(Math.random() * (100000 - 10 + 1)) + 10,
      bleu: 0.92,
      rouge_1: 0.95,
      rouge_2: 0.89,
      rouge_l: 0.93,
    });
    onOpen("learningNotice");
  };

  const checkFields = () => {
    const { name, description, learning_data, verification_data } =
      form.getValues();
    if (!name) {
      alert("모델명을 입력해 주세요.");
      return;
    } else if (!description) {
      alert("모델 설명을 입력해 주세요.");
      return;
    } else if (!learning_data) {
      alert("학습 데이터를 첨부해 주세요.");
      return;
    } else if (!verification_data) {
      alert("검증 데이터를 첨부해 주세요.");
      return;
    }
  };

  return (
    <PageLayout title="모델 학습">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="px-7">
            <div className="space-y-3 pt-6 pb-9">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <input
                        {...field}
                        placeholder="모델명을 입력해 주세요."
                        className="px-6 w-full h-[60px] rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 focus:outline-none placeholder:text-black/60 placeholder:font-normal text-lg font-bold"
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
                        placeholder="모델에 대해 설명해 주세요."
                        className="min-h-[74px] h-[74px] px-6 py-6 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 resize-none"
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>
            <div className="flex gap-12">
              <div className="space-y-10 w-[470px]">
                <div>
                  <h4 className="mb-3 text-lg ">베이스 모델</h4>
                  <FormField
                    control={form.control}
                    name="base_model"
                    render={({ field }) => (
                      <FormItem>
                        <FormControl>
                          <ModelSelect
                            value={field.value}
                            onChange={field.onChange}
                          />
                        </FormControl>
                      </FormItem>
                    )}
                  />
                </div>
                <FormField
                  control={form.control}
                  name="learning_data"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <LearningDataConfig
                          value={field.value}
                          onChange={field.onChange}
                          hasInitialData={!!model}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="verification_data"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <VerificationDataConfig
                          value={field.value}
                          onChange={field.onChange}
                          hasInitialData={!!model}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="tuning_method"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <ChoiceTuningMethod
                          value={field.value}
                          onChange={field.onChange}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </div>
              <div className="w-[537px]">
                <h4 className="mb-5 text-lg ">세부 조정</h4>
                <div className="space-y-10">
                  <div className="flex items-center">
                    <div className="w-36 text-[#454545] truncate">
                      Batches Size
                    </div>
                    <FormField
                      control={form.control}
                      name="batch_size"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <TuningSlider
                              value={field.value}
                              onChange={field.onChange}
                              max={10}
                              step={1}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="w-36 text-[#454545] truncate">
                      Learning rate multiplier
                    </div>
                    <FormField
                      control={form.control}
                      name="learning_rate"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <TuningSlider
                              value={field.value}
                              onChange={field.onChange}
                              max={10}
                              step={0.0001}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className="flex items-center">
                    <div className="w-36 text-[#454545] truncate">
                      Number Of Epoch
                    </div>
                    <FormField
                      control={form.control}
                      name="epochs"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <TuningSlider
                              value={field.value}
                              onChange={field.onChange}
                              max={10}
                              step={1}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <Accordion type="single" collapsible className="mt-9">
                  <AccordionItem value="item-1" className="border-none">
                    <CustomAccordionTrigger>고급 옵션</CustomAccordionTrigger>
                    <AccordionContent className="py-4">
                      <div className="space-y-10">
                        <div className="flex items-center">
                          <div className="w-36 text-[#454545] text-base truncate">
                            Beta1
                          </div>
                          <FormField
                            control={form.control}
                            name="beta1"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <TuningSlider
                                    value={field.value}
                                    onChange={field.onChange}
                                    max={1}
                                    step={0.1}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="w-36 text-[#454545] text-base truncate">
                            Beta2
                          </div>
                          <FormField
                            control={form.control}
                            name="beta2"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <TuningSlider
                                    value={field.value}
                                    onChange={field.onChange}
                                    max={1}
                                    step={0.001}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="w-36 text-[#454545] text-base truncate">
                            Epsilon
                          </div>
                          <FormField
                            control={form.control}
                            name="epsilon"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <TuningSlider
                                    value={field.value}
                                    onChange={field.onChange}
                                    max={1}
                                    step={0.000001}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="w-36 text-[#454545] text-base truncate">
                            Weight Decay
                          </div>
                          <FormField
                            control={form.control}
                            name="weight_decay"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <TuningSlider
                                    value={field.value}
                                    onChange={field.onChange}
                                    max={1}
                                    step={0.001}
                                  />
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="w-36 text-[#454545] text-base truncate">
                            AMSGrad
                          </div>
                          <FormField
                            control={form.control}
                            name="amsgrad"
                            render={({ field }) => (
                              <div className="ml-3 flex items-center space-x-2">
                                <CustomSwitch
                                  id="ams-grad"
                                  checked={field.value}
                                  onCheckedChange={field.onChange}
                                />
                                <label
                                  htmlFor="ams-grad"
                                  className="text-[#454545] text-base"
                                >
                                  {field.value ? "On" : "Off"}
                                </label>
                              </div>
                            )}
                          />
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex justify-end mt-[10px]">
                  <button
                    type="submit"
                    onClick={checkFields}
                    className="flex justify-center items-center h-12 w-[161px] px-6 rounded-[10px] bg-blue hover:bg-blue/90"
                  >
                    학습하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </PageLayout>
  );
}
