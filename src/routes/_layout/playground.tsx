import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/_layout/playground")({
  component: PlaygroundPage,
});

function PlaygroundPage() {
  return (
    <div>
      <div className="flex items-center px-7 h-[68px]">
        <h4 className="text-lg">플레이 그라운드</h4>
      </div>
      <div className="flex gap-5 px-9 py-6">
        <div className="flex-1">
          <div className="flex justify-end">
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
    </div>
  );
}
