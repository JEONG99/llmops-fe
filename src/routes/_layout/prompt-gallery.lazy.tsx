import { createLazyFileRoute } from "@tanstack/react-router";

import PageLayout from "@/components/layout/page-layout";
import PromptItem from "@/components/prompt-gallery/prompt-item";

export const Route = createLazyFileRoute("/_layout/prompt-gallery")({
  component: PromptGalleryPage,
});

function PromptGalleryPage() {
  return (
    <PageLayout
      title="프롬프트 갤러리"
      headerContent={
        <div className="flex items-end h-full">
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
      }
    >
      <div className="grid grid-cols-3 gap-5 px-7 py-10">
        {Array(12)
          .fill(0)
          .map((_, index) => (
            <PromptItem key={index} />
          ))}
      </div>
    </PageLayout>
  );
}
