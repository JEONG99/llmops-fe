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
import { Slider } from "@/components/ui/custom-slider";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import { CustomSwitch } from "@/components/ui/switch";
import { Textarea } from "@/components/ui/textarea";
import { createLazyFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { useForm } from "react-hook-form";

export const Route = createLazyFileRoute("/_layout/model-learning")({
  component: ModelLearningPage,
});

function ModelLearningPage() {
  const [amsgradChecked, setAmsgradChecked] = useState(false);
  const form = useForm({
    defaultValues: {
      batchesSize: 0,
      learningRate: 0,
      epochs: 0,
      beta1: 0,
      beta2: 0,
      epsilon: 0,
      weightDecay: 0,
    },
  });

  const onSubmit = () => {};

  return (
    <div className="pb-20">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="flex items-center px-7 h-[68px]">
            <h4 className="text-lg ">모델 학습</h4>
          </div>
          <div className="px-10">
            <div className="space-y-3 pt-6 pb-9">
              <div>
                <input
                  placeholder="모델명을 입력해 주세요."
                  className="px-6 w-full h-[60px] rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 focus:outline-none placeholder:text-black/60 placeholder:font-normal text-lg font-bold"
                />
              </div>
              <div>
                <Textarea
                  placeholder="모델에 대해 설명해 주세요."
                  className="min-h-[74px] h-[74px] px-6 py-6 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 resize-none"
                />
              </div>
            </div>
            <div className="flex gap-12">
              <div className="space-y-10 w-[470px]">
                <div>
                  <h4 className="mb-3 text-lg ">베이스 모델</h4>
                  <ModelSelect />
                </div>
                <LearningDataConfig />
                <VerificationDataConfig />
                <ChoiceTuningMethod />
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
                      name="batchesSize"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <div className="flex items-center w-full">
                              <div className="ml-3 mr-5">
                                <input
                                  value={field.value}
                                  onChange={field.onChange}
                                  className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-center focus:outline-none"
                                />
                              </div>
                              <div className="relative flex-1">
                                <Slider
                                  value={[field.value]}
                                  onValueChange={(value) =>
                                    field.onChange(value[0])
                                  }
                                  max={10}
                                  step={1}
                                  className="w-full"
                                />
                                <div className="absolute -bottom-8 flex justify-between w-full">
                                  <span className="text-[#858585] text-xs">
                                    0
                                  </span>
                                  <span className="text-[#858585] text-xs">
                                    10
                                  </span>
                                </div>
                              </div>
                            </div>
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
                      name="learningRate"
                      render={({ field }) => (
                        <FormItem className="flex-1">
                          <FormControl>
                            <div className="flex items-center w-full">
                              <div className="ml-3 mr-5">
                                <input
                                  value={field.value}
                                  onChange={field.onChange}
                                  className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-center focus:outline-none"
                                />
                              </div>
                              <div className="relative flex-1">
                                <Slider
                                  value={[field.value]}
                                  onValueChange={(value) =>
                                    field.onChange(value[0])
                                  }
                                  max={10}
                                  step={0.001}
                                  className="w-full"
                                />
                                <div className="absolute -bottom-8 flex justify-between w-full">
                                  <span className="text-[#858585] text-xs">
                                    0
                                  </span>
                                  <span className="text-[#858585] text-xs">
                                    10
                                  </span>
                                </div>
                              </div>
                            </div>
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
                            <div className="flex items-center w-full">
                              <div className="ml-3 mr-5">
                                <input
                                  value={field.value}
                                  onChange={field.onChange}
                                  className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-center focus:outline-none"
                                />
                              </div>
                              <div className="relative flex-1">
                                <Slider
                                  value={[field.value]}
                                  onValueChange={(value) =>
                                    field.onChange(value[0])
                                  }
                                  max={10}
                                  step={1}
                                  className="w-full"
                                />
                                <div className="absolute -bottom-8 flex justify-between w-full">
                                  <span className="text-[#858585] text-xs">
                                    0
                                  </span>
                                  <span className="text-[#858585] text-xs">
                                    10
                                  </span>
                                </div>
                              </div>
                            </div>
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
                                  <div className="flex items-center w-full">
                                    <div className="ml-3 mr-5">
                                      <input
                                        value={field.value}
                                        onCanPlay={field.onChange}
                                        className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                                      />
                                    </div>
                                    <div className="relative flex-1">
                                      <Slider
                                        value={[field.value]}
                                        onValueChange={(value) =>
                                          field.onChange(value[0])
                                        }
                                        max={1}
                                        step={0.1}
                                        className="w-full"
                                      />
                                      <div className="absolute -bottom-8 flex justify-between w-full">
                                        <span className="text-[#858585] text-xs">
                                          0
                                        </span>
                                        <span className="text-[#858585] text-xs">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                                  <div className="flex items-center w-full">
                                    <div className="ml-3 mr-5">
                                      <input
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                                      />
                                    </div>
                                    <div className="relative flex-1">
                                      <Slider
                                        value={[field.value]}
                                        onValueChange={(value) =>
                                          field.onChange(value[0])
                                        }
                                        max={1}
                                        step={0.001}
                                        className="w-full"
                                      />
                                      <div className="absolute -bottom-8 flex justify-between w-full">
                                        <span className="text-[#858585] text-xs">
                                          0
                                        </span>
                                        <span className="text-[#858585] text-xs">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                                  <div className="flex items-center w-full">
                                    <div className="ml-3 mr-5">
                                      <input
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                                      />
                                    </div>
                                    <div className="relative flex-1">
                                      <Slider
                                        value={[field.value]}
                                        onValueChange={(value) =>
                                          field.onChange(value[0])
                                        }
                                        max={1}
                                        step={0.00001}
                                        className="w-full"
                                      />
                                      <div className="absolute -bottom-8 flex justify-between w-full">
                                        <span className="text-[#858585] text-xs">
                                          0
                                        </span>
                                        <span className="text-[#858585] text-xs">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
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
                            name="weightDecay"
                            render={({ field }) => (
                              <FormItem className="flex-1">
                                <FormControl>
                                  <div className="flex items-center w-full">
                                    <div className="ml-3 mr-5">
                                      <input
                                        value={field.value}
                                        onChange={field.onChange}
                                        className="w-[65px] h-[37px] bg-[#F1F6FF] rounded-[10px] text-[#565656] text-base text-center focus:outline-none"
                                      />
                                    </div>
                                    <div className="relative flex-1">
                                      <Slider
                                        value={[field.value]}
                                        onValueChange={(value) =>
                                          field.onChange(value[0])
                                        }
                                        max={1}
                                        step={0.01}
                                        className="w-full"
                                      />
                                      <div className="absolute -bottom-8 flex justify-between w-full">
                                        <span className="text-[#858585] text-xs">
                                          0
                                        </span>
                                        <span className="text-[#858585] text-xs">
                                          1
                                        </span>
                                      </div>
                                    </div>
                                  </div>
                                </FormControl>
                              </FormItem>
                            )}
                          />
                        </div>
                        <div className="flex items-center">
                          <div className="w-36 text-[#454545] text-base truncate">
                            AMSGrad
                          </div>
                          <div className="ml-3 flex items-center space-x-2">
                            <CustomSwitch
                              id="ams-grad"
                              checked={amsgradChecked}
                              onCheckedChange={setAmsgradChecked}
                            />
                            <label
                              htmlFor="ams-grad"
                              className="text-[#454545] text-base"
                            >
                              {amsgradChecked ? "On" : "Off"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
                <div className="flex justify-end mt-[10px]">
                  <button className="flex justify-center items-center h-12 w-[161px] px-6 rounded-[10px] bg-blue hover:bg-blue/90">
                    학습하기
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </Form>
    </div>
  );
}
