import CustomSimpleBar from "@/components/common/simplebar";
import { cn } from "@/lib/utils";
import { useState } from "react";

const VerificationDataConfig = () => {
  const [upload, setUpload] = useState(true);

  return (
    <div>
      <div className="flex items-center justify-between mb-3">
        <h4 className="text-lg ">검증 데이터</h4>
        <div className="flex items-center gap-7">
          <div
            onClick={() => setUpload(true)}
            className="flex items-center gap-[10px] cursor-pointer"
          >
            <div className="flex items-center justify-center size-[22px] border border-black rounded-full">
              <div
                className={cn(
                  "size-[14px] rounded-full bg-blue",
                  upload ? "block" : "hidden"
                )}
              />
            </div>
            <span className="text-sm">데이터 업로드</span>
          </div>
          <div
            onClick={() => setUpload(false)}
            className="flex items-center gap-[10px] cursor-pointer"
          >
            <div className="flex items-center justify-center size-[22px] border border-black rounded-full">
              <div
                className={cn(
                  "size-[14px] rounded-full bg-blue",
                  upload ? "hidden" : "block"
                )}
              />
            </div>
            <span className="text-sm">기존 파일 선택</span>
          </div>
        </div>
      </div>
      {upload ? (
        <div className="h-[146px] rounded-[10px] bg-[#F1F4FF] cursor-pointer">
          <div className="flex flex-col justify-center items-center gap-2 h-full">
            <img
              src="/icon/folder-add-icon.svg"
              alt=""
              className="size-[58px]"
            />
            <h5 className="text-sm">드래그 앤 드롭으로 파일 업로드</h5>
            <p className="text-black/50 text-sm">(파일 형식)</p>
          </div>
        </div>
      ) : (
        <CustomSimpleBar className="h-[146px] rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20">
          <ul>
            {Array(50)
              .fill("data")
              .map((value, index) => (
                <li
                  key={index}
                  className="flex items-center h-[38px] px-6 border-b border-blue/20 last:border-none"
                >
                  <div className="text-[#373737]">{`${value} ${index}`}</div>
                </li>
              ))}
          </ul>
        </CustomSimpleBar>
      )}
    </div>
  );
};

export default VerificationDataConfig;
