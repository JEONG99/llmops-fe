const ModelDetail = ({
  selectedId,
  setSelectedId,
}: {
  selectedId: string | null;
  setSelectedId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  return (
    <div className="h-full w-full rounded-[10px] bg-[#FAFBFE] border border-blue-border">
      <div className="pt-8 px-10 pb-5">
        <div className="flex justify-between">
          <div className="space-y-3">
            <div className="flex items-center gap-1.5">
              <span className="text-lg font-bold">sample-model_01</span>
              <button>
                <img src="/icon/pencil-icon.svg" alt="" className="size-6" />
              </button>
            </div>
            <div className="text-black/70">2024-03-23 10:39:33</div>
          </div>
          <div className="flex items-center gap-6">
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
            <button onClick={() => setSelectedId(null)}>
              <img src="/icon/cancel-icon.svg" alt="" className="size-8" />
            </button>
          </div>
        </div>
      </div>
      <div className="mt-9 space-y-4">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default ModelDetail;
