import Star from "@/components/prompt-gallery/star";
import { useRef, useState } from "react";

const PromptItem = () => {
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
          <span className="text-lg">보고서 요약</span>
        </div>
        <div className="flex items-center gap-3">
          <button className="hover:opacity-80">
            <img src="/icon/edit-icon.svg" alt="" className="size-6" />
          </button>
          <button className="hover:opacity-80">
            <img src="/icon/cards-icon.svg" alt="" className="size-6" />
          </button>
        </div>
      </div>
      <div className="space-y-5 pt-9 pb-6">
        <p className="min-h-[72px] px-8 text-black/70 line-clamp-3">
          보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는
          프롬프트보고서를 만들고 요약해주는 프롬프트보고서를 만들고 요약해주는
          프롬프트
        </p>
        <div
          ref={scrollRef}
          className="flex gap-[10px] px-7 overflow-x-auto scrollbar-hide"
          onMouseDown={handleMouseDown}
          onMouseMove={handleMouseMove}
        >
          <div className="py-1 px-2.5 bg-[#E4EBFF] rounded-sm text-[#601FF9] leading-tight text-nowrap select-none">
            sample-model_01
          </div>
          <div className="py-1 px-2.5 bg-[#DBF1F6] rounded-sm text-[#006F88] leading-tight text-nowrap select-none">
            data 01
          </div>
          <div className="py-1 px-2.5 bg-[#FFEEF2] rounded-sm text-[#FF4976] leading-tight text-nowrap select-none">
            풀파인튜닝
          </div>
        </div>
        <div className="px-8 text-black/70">최근 수정 2024-02-12</div>
      </div>
    </div>
  );
};

export default PromptItem;
