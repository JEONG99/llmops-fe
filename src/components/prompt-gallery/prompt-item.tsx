import { useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";

import Star from "@/components/prompt-gallery/star";
import { Prompt } from "@/types";
import { cn } from "@/lib/utils";

const PromptItem = ({ prompt }: { prompt: Prompt }) => {
  const navigate = useNavigate();

  const [checked, setChecked] = useState(false);

  const scrollRef = useRef<HTMLDivElement | null>(null);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    if (scrollRef.current) {
      setStartX(e.pageX - scrollRef.current.offsetLeft);
      setScrollLeft(scrollRef.current.scrollLeft);
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    if (scrollRef.current) {
      const x = e.pageX - scrollRef.current.offsetLeft;
      const walk = (x - startX) * 1.5;
      scrollRef.current.scrollLeft = scrollLeft - walk;
    }
  };

  const copyPromptAndRedirect = (edit: boolean) => {
    navigate({ to: "/prompt-making", state: { prompt, isEdit: edit } });
  };

  return (
    <div className="border border-[#b3b3b3] rounded-[10px] overflow-hidden">
      <div className="flex justify-between items-center py-5 pl-7 pr-5 bg-[#f5f5f5] border-b border-blue-light">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setChecked((prev) => !prev)}
            className="hover:opacity-80"
          >
            <Star checked={checked} />
          </button>
          <span className="text-lg">{prompt.title}</span>
        </div>
        <div className="flex items-center gap-3">
          <button
            onClick={() => copyPromptAndRedirect(true)}
            className="hover:opacity-80"
          >
            <img src="/icon/edit-icon.svg" alt="" className="size-6" />
          </button>
          <button
            onClick={() => copyPromptAndRedirect(false)}
            className="hover:opacity-80"
          >
            <img src="/icon/cards-icon.svg" alt="" className="size-6" />
          </button>
        </div>
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
