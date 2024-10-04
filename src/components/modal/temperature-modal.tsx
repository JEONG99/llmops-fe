import CustomSimpleBar from "@/components/common/simplebar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useModalStore } from "@/hooks/use-modal-store";

const TemperatureModal = () => {
  const { isOpen, type, onClose } = useModalStore();
  const isModalOpen = isOpen && type === "temperature";

  if (!isModalOpen) return null;
  return (
    <Dialog open={isModalOpen} onOpenChange={onClose}>
      <DialogContent className="pt-6 pb-0 px-6">
        <DialogHeader>
          <DialogTitle className="text-center text-base font-bold">
            Temperature 값에 따른 생성 결과
          </DialogTitle>
          <DialogDescription className="hidden">
            Temperature 값에 따른 생성 결과
          </DialogDescription>
        </DialogHeader>
        <CustomSimpleBar className="max-h-[400px]">
          <div className="space-y-8 pr-2 pb-2">
            <p className="px-1 text-sm text-black/70">
              일반적으로 온도는 0 이상의 실수 값을 가질 수 있지만, 실제로
              사용되는 범위는 모델마다 다를 수 있습니다. 대부분의 모델에서 0부터
              1 사이의 값을 사용하며, 경우에 따라 더 높은 값을 사용하기도
              합니다.
            </p>
            <ul className="space-y-4">
              <li>
                <h2 className="flex items-center gap-2 font-bold text-black/70">
                  <text className="text-[6px]">{"\u2B24"}</text>온도가 낮을 때
                  (0에 가까울 때):
                </h2>
                <p className="text-sm text-black/70">
                  모델이 가장 확률이 높은 단어를 선택하여 생성하기 때문에,
                  생성되는 텍스트가 일관성 있고 예측 가능합니다. 즉, 창의적인
                  텍스트보다는 정보 전달에 적합한 텍스트가 생성됩니다.
                </p>
              </li>
              <li>
                <h2 className="flex items-center gap-2 font-bold text-black/70">
                  <text className="text-[6px]">{"\u2B24"}</text>온도가 높을 때
                  (1에 가까울 때)
                </h2>
                <p className="text-sm text-black/70">
                  모델이 다양한 단어를 선택할 가능성이 높아져, 생성되는 텍스트가
                  다양하고 창의적입니다. 하지만, 의미가 불분명하거나 비논리적인
                  텍스트가 생성될 수도 있습니다.
                </p>
              </li>
              <li>
                <h2 className="flex items-center gap-2 font-bold text-black/70">
                  <text className="text-[6px]">{"\u2B24"}</text>온도 조절을 통한
                  생성 결과 조절
                </h2>
                <p className="text-sm text-black/70">
                  - 정보 전달: 온도를 낮게 설정하여 명확하고 간결한 텍스트를
                  생성합니다.
                  <br />- 창의적인 글쓰기: 온도를 높게 설정하여 다양하고
                  독창적인 텍스트를 생성합니다.
                  <br />- 번역: 온도를 낮게 설정하여 정확한 번역 결과를 얻을 수
                  있습니다.
                  <br />- 코드 생성: 온도를 낮게 설정하여 정확한 코드를
                  생성합니다.
                </p>
              </li>
            </ul>
            <ul className="space-y-4 list-inside list-disc marker:text-[8px] text-black/70">
              <li>
                팁
                <ul className="pl-6 pt-3 list-disc marker:text-[8px]">
                  <li className="text-sm">
                    온도는 모델마다 다르게 작동합니다: 각 모델의 문서를 참고하여
                    적절한 온도 범위를 확인하는 것이 좋습니다.
                  </li>
                  <li className="text-sm">
                    목적에 맞게 온도를 조절하세요: 생성하고자 하는 텍스트의
                    종류에 따라 온도를 조절하여 최적의 결과를 얻을 수 있습니다.
                  </li>
                  <li className="text-sm">
                    실험을 통해 최적의 값을 찾으세요: 다양한 온도 값을
                    시도해보면서 원하는 결과를 얻을 수 있는 최적의 값을 찾는
                    것이 중요합니다.
                  </li>
                </ul>
              </li>
              <li>
                예시:
                <ul className="pl-6 pt-3 list-disc marker:text-[8px]">
                  <li className="text-sm">
                    GPT-3: 일반적으로 0.7 정도의 온도를 사용하며, 0.5 이하로
                    설정하면 더욱 일관성 있는 텍스트를 얻을 수 있습니다.
                  </li>
                  <li className="text-sm">
                    Jurassic-1 Jumbo: 다양한 온도 범위를 지원하며, 모델의 특성에
                    따라 적절한 온도를 설정해야 합니다.
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </CustomSimpleBar>
      </DialogContent>
    </Dialog>
  );
};

export default TemperatureModal;
