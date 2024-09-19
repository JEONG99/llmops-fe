const StatusIcon = ({ status }: { status: "progress" | "done" | "failed" }) => {
  if (status === "progress") {
    return (
      <div className="flex justify-center items-center h-[22px] w-[75px] rounded-[30px] border border-blue-50 bg-blue-30">
        <span className="text-xs text-blue-50">학습 중</span>
      </div>
    );
  }
  if (status === "done") {
    return (
      <div className="flex justify-center items-center h-[22px] w-[75px] rounded-[30px] border border-green-50 bg-green-30">
        <span className="text-xs text-green-60">학습 완료</span>
      </div>
    );
  }
  return (
    <div className="flex justify-center items-center h-[22px] w-[75px] rounded-[30px] border border-red-50 bg-red-30">
      <span className="text-xs text-red-50">학습 실패</span>
    </div>
  );
};

export default StatusIcon;
