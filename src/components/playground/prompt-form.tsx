import { Trash2 } from "lucide-react";

import ActionTooltip from "@/components/common/action-tootip";
import ModelSelect from "@/components/prompt-making/model-select";
import { Textarea } from "@/components/ui/textarea";
import { FormControl, FormField, FormItem } from "@/components/ui/form";
import { Control, FieldValues, Path } from "react-hook-form";
import { ClipLoader } from "react-spinners";

interface PromptFormProps<T extends FieldValues> {
  title: string;
  removePrompt: (() => void) | undefined;
  name: string;
  control: Control<T>;
  output: string | undefined;
  loading: boolean;
}

const PromptForm = <T extends FieldValues>({
  title,
  removePrompt,
  name,
  control,
  output,
  loading,
}: PromptFormProps<T>) => {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex justify-between items-center">
        <span className="text-lg">{title}</span>
        {removePrompt && (
          <ActionTooltip side="left" title="프롬프트 제거하기">
            <button
              type="button"
              onClick={removePrompt}
              className="hover:opacity-50"
            >
              <Trash2 className="size-5" />
            </button>
          </ActionTooltip>
        )}
      </div>
      <div className="space-y-4">
        <FormField
          control={control}
          name={`${name}.model` as Path<T>}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <h4 className="mb-4">Model</h4>
                  <ModelSelect
                    value={field.value}
                    onChange={field.onChange}
                    disabled={loading}
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name={`${name}.instruction` as Path<T>}
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div>
                  <h4 className="mb-4">Instruction</h4>
                  <Textarea
                    {...field}
                    disabled={loading}
                    placeholder="ex) 주어진 패션 상품에 어울리는 상품 설명을 만드시오."
                    className="min-h-[90px] h-[90px] p-5 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 text-black/70 text-base resize-none"
                  />
                </div>
              </FormControl>
            </FormItem>
          )}
        />
        <div>
          <h4 className="mb-4">Output</h4>
          <div className="h-[268px] p-5 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 overflow-y-auto">
            {loading ? (
              <div className="flex items-center justify-center h-full">
                <ClipLoader />
              </div>
            ) : (
              <p className="text-lg text-black/70">{output || ""}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PromptForm;
