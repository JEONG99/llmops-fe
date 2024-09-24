import PromptItem from "@/components/prompt-gallery/prompt-item";
import { createLazyFileRoute } from "@tanstack/react-router";

export const Route = createLazyFileRoute("/_layout/prompt-gallery")({
  component: PromptGalleryPage,
});

function PromptGalleryPage() {
  return (
    <div className="pb-20">
      <div className="flex items-center justify-between px-7 h-[68px]">
        <h4 className="text-lg ">프롬프트 갤러리</h4>
        <button
          type="button"
          className="flex items-center justify-center gap-2 w-[165px] h-12 rounded-[10px] bg-blue-light hover:bg-blue-light/70"
        >
          <img
            src="/icon/circle-arrow-right-icon.svg"
            alt=""
            className="size-6"
          />
          <span>프롬프트 만들기</span>
        </button>
      </div>
      <div className="grid grid-cols-3 gap-5 px-7 py-10">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <PromptItem key={index} />
          ))}
      </div>
    </div>
  );
}
