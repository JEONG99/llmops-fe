import PageLayout from "@/components/layout/page-layout";
import ModelSelect from "@/components/model-learning/model-select";
import Star from "@/components/prompt-gallery/star";
import { Textarea } from "@/components/ui/textarea";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/playground")({
  component: PlaygroundPage,
});

function PlaygroundPage() {
  return (
    <PageLayout title="플레이 그라운드">
      <div className="flex gap-6 px-9 pt-5">
        <div className="flex-1">
          <div className="mb-8 flex justify-end">
            <button
              type="button"
              className="flex items-center justify-center gap-4 w-[165px] h-12 rounded-[10px] bg-blue-light hover:bg-blue-light/70"
            >
              <img
                src="/icon/circle-arrow-right-icon.svg"
                alt=""
                className="size-6"
              />
              <span>비교 추가하기</span>
            </button>
          </div>
          <div className="flex gap-4">
            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-between pr-6">
                <span className="text-lg">프롬프트 A</span>
                <div className="flex items-center gap-4">
                  <button className="hover:opacity-80">
                    <Star checked />
                  </button>
                  <button className="hover:opacity-80">
                    <img
                      src="/icon/pencil-icon.svg"
                      alt=""
                      className="size-6"
                    />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-4">Base Model</h4>
                  <ModelSelect />
                </div>
                <div>
                  <h4 className="mb-4">Instruction</h4>
                  <Textarea
                    value={"주어진 패션 상품에 어울리는 상품 설명을 만드시오"}
                    className="min-h-[84px] h-[84px] px-[22px] py-5 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 text-black/70 text-base resize-none"
                  />
                </div>
                <div className="min-h-[268px] p-8 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20">
                  <p className="text-lg text-black/70">
                    스타일리시한 그래픽이 특징인 반소매 티셔츠입니다. 베이직한
                    네이비 색상에 눈길을 사로잡는 레터링이 인상적으로 프린팅되어
                    있습니다. 부드러운 코튼 소재로 제작되어 착용 시 자연스러운
                    핏이 만들어줍니다. 다양한 하의와 함께 여러가지 무드를
                    연출하기 좋습니다.
                  </p>
                </div>
              </div>
            </div>
            <div className="flex-1 space-y-6">
              <div className="flex items-center justify-between pr-6">
                <span className="text-lg">프롬프트 B</span>
                <div className="flex items-center gap-4">
                  <button className="hover:opacity-80">
                    <Star />
                  </button>
                  <button className="hover:opacity-80">
                    <img
                      src="/icon/pencil-icon.svg"
                      alt=""
                      className="size-6"
                    />
                  </button>
                </div>
              </div>
              <div className="space-y-4">
                <div>
                  <h4 className="mb-4">Base Model</h4>
                  <ModelSelect />
                </div>
                <div>
                  <h4 className="mb-4">Instruction</h4>
                  <Textarea
                    value={"주어진 패션 상품에 어울리는 상품 설명을 만드시오"}
                    className="min-h-[84px] h-[84px] px-[22px] py-5 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20 placeholder:text-black/50 text-black/70 text-base resize-none"
                  />
                </div>
                <div className="min-h-[268px] p-8 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20">
                  <p className="text-lg text-black/70">
                    개성있는 그래픽과 레터링이 있는 반소매 티셔츠입니다.
                    <br />
                    깔끔한 네이비 코튼 소재로 제작되어 다양한 스타일의 하의와
                    자연스러운 연출이 가능합니다.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6 flex flex-col justify-between min-h-[156px] pt-7 pl-8 pr-5 pb-5 rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20">
            <Textarea
              value={"주어진 패션 상품에 어울리는 상품 설명을 만드시오"}
              className="flex-1 min-h-0 p-0 bg-inherit border-none placeholder:text-black/50 text-black/70 text-lg resize-none"
            />
            <div className="flex justify-end">
              <button className="flex items-center h-12 px-11 rounded-[10px] bg-blue hover:bg-blue/90">
                생성하기
              </button>
            </div>
          </div>
        </div>
        <div className="w-[330px]">
          <div className="flex justify-center items-end h-12">
            <span className="text-lg">히스토리</span>
          </div>
          <div className="mt-9">
            <div>
              <div className="flex items-center">
                <div className="flex-1 text-center">프롬프트 A</div>
                <span className="text-lg text-black/30">vs</span>
                <div className="flex-1 text-center">프롬프트 B</div>
              </div>
              <div className="mt-9 space-y-2.5">
                <div className="p-4 rounded-[10px] bg-[#F1F4FF] border border-blue cursor-pointer">
                  <h4 className="mb-1 truncate">
                    주어진 패션 상품에 어울리는 상품 설명을 만드시오
                  </h4>
                  <span className="text-xs text-black/70">
                    2024-02-12 15:33
                  </span>
                </div>
                <div className="p-4 rounded-[10px] bg-[#F1F4FF] cursor-pointer">
                  <h4 className="mb-1 truncate">
                    주어진 의류에 어울리는 상품 설명을 만드시오
                  </h4>
                  <span className="text-xs text-black/70">
                    2024-02-12 15:33
                  </span>
                </div>
                <div className="p-4 rounded-[10px] bg-[#F1F4FF] cursor-pointer">
                  <h4 className="mb-1 truncate">
                    주어진 텍스트와 비슷한 상품 설명을 만드시오
                  </h4>
                  <span className="text-xs text-black/70">
                    2024-02-12 15:33
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-[66px]">
              <div className="flex items-center">
                <div className="flex-1 text-center">프롬프트 A</div>
                <span className="text-lg text-black/30">vs</span>
                <div className="flex-1 text-center">프롬프트 B</div>
                <span className="text-lg text-black/30">vs</span>
                <div className="flex-1 text-center">프롬프트 C</div>
              </div>
              <div className="mt-9 space-y-2.5">
                <div className="p-4 rounded-[10px] bg-[#F1F4FF] cursor-pointer">
                  <h4 className="mb-1 truncate">
                    주어진 과일에 어울리는 상품 설명을 만드시오
                  </h4>
                  <span className="text-xs text-black/70">
                    2024-02-12 15:33
                  </span>
                </div>
                <div className="p-4 rounded-[10px] bg-[#F1F4FF] cursor-pointer">
                  <h4 className="mb-1 truncate">
                    주어진 패션 상품에 어울리는 제목을 만드시오
                  </h4>
                  <span className="text-xs text-black/70">
                    2024-02-12 15:33
                  </span>
                </div>
                <div className="p-4 rounded-[10px] bg-[#F1F4FF] cursor-pointer">
                  <h4 className="mb-1 truncate">
                    주어진 패션 상품에 어울리는 제목을 만드시오
                  </h4>
                  <span className="text-xs text-black/70">
                    2024-02-12 15:33
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
