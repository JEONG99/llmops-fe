import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import Star from "@/components/prompt-gallery/star";
import { Prompt } from "@/types";
import { cn } from "@/lib/utils";
import ActionTooltip from "@/components/common/action-tootip";

const PromptItem = ({
  prompt,
  variant = "gallery",
  onClick = () => {},
}: {
  prompt: Prompt;
  variant?: "gallery" | "loadModal";
  onClick?: () => void;
}) => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [moving, setMoving] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      setMoving(true);
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (moving && scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const handleMouseUp = () => {
    setMoving(false);
  };

  const copyPromptAndRedirect = (edit: boolean) => {
    navigate({ to: "/prompt-making", state: { prompt, isEdit: edit } });
  };

  return (
    <div
      onClick={onClick}
      className={cn(
        "border border-[#b3b3b3] rounded-[10px] overflow-hidden",
        variant === "loadModal" && "cursor-pointer"
      )}
    >
      <div className="flex justify-between items-center py-5 pl-7 pr-5 bg-[#f5f5f5] border-b border-blue-light">
        <div className="flex items-center gap-3">
          {variant === "gallery" ? (
            <button
              onClick={() => setChecked((prev) => !prev)}
              className="hover:opacity-70"
            >
              <Star checked={checked} />
            </button>
          ) : (
            <Star checked={checked} />
          )}
          <span className="text-lg">{prompt.title}</span>
        </div>
        {variant === "gallery" ? (
          <div className="flex items-center gap-3">
            <ActionTooltip title="프롬프트 수정하기">
              <button
                onClick={() => copyPromptAndRedirect(true)}
                className="hover:opacity-70"
              >
                <img src="/icon/edit-icon.svg" alt="" className="size-6" />
              </button>
            </ActionTooltip>
            <ActionTooltip title="프롬프트 만들기">
              <button
                onClick={() => copyPromptAndRedirect(false)}
                className="hover:opacity-70"
              >
                <img src="/icon/cards-icon.svg" alt="" className="size-6" />
              </button>
            </ActionTooltip>
          </div>
        ) : null}
      </div>
      <div className="space-y-5 pt-9 pb-6">
        <p className="min-h-[72px] px-8 text-black/70 line-clamp-3">
          {prompt.description}
        </p>
        <div
          ref={scrollRef}
          className="flex gap-[10px] px-7 overflow-x-auto scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
          onMouseUp={handleMouseUp}
        >
          <div className="py-1 px-2.5 bg-[#E4EBFF] rounded-sm text-[#601FF9] leading-tight text-nowrap select-none">
            {prompt.base_model.name}
          </div>
          <div
            className={cn(
              "py-1 px-2.5 bg-[#DBF1F6] rounded-sm text-[#006F88] leading-tight text-nowrap select-none",
              prompt.data ? "block" : "hidden"
            )}
          >
            {prompt.data}
          </div>
          <div className="py-1 px-2.5 bg-[#FFEEF2] rounded-sm text-[#FF4976] leading-tight text-nowrap select-none">
            {prompt.base_model.tuning_method}
          </div>
        </div>
        <div className="px-8 text-black/70">최근 수정 {prompt.created_at}</div>
      </div>
    </div>
  );
};

export default PromptItem;
