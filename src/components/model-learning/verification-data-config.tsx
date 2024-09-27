import { Check } from "lucide-react";
import { useState } from "react";
import { useDropzone } from "react-dropzone";

import CustomSimpleBar from "@/components/common/simplebar";
import { VERIFICATION_DATA_LIST } from "@/lib/const";
import { cn } from "@/lib/utils";

const VerificationDataConfig = ({
  value,
  onChange,
  hasInitialData,
}: {
  value: string;
  onChange: (...event: any[]) => void;
  hasInitialData: boolean;
}) => {
  const [upload, setUpload] = useState(!hasInitialData);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop: (acceptedFiles, rejectedFiles) => {
      if (rejectedFiles.length > 1) {
        alert("하나의 데이터 파일만 업로드 가능합니다.");
      } else {
        onChange(acceptedFiles[0].name);
      }
    },
    maxFiles: 1,
  });

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
        <div
          {...getRootProps()}
          className={cn(
            "h-[146px] rounded-[10px] bg-[#F1F4FF] cursor-pointer",
            isDragActive && "border border-blue"
          )}
        >
          <input {...getInputProps()} />
          {value ? (
            <div className="flex justify-center items-center gap-4 h-full">
              <span className="text-lg">{value}</span>
            </div>
          ) : (
            <div className="flex flex-col justify-center items-center gap-2 h-full">
              <img
                src="/icon/folder-add-icon.svg"
                alt=""
                className="size-[58px]"
              />
              <h5 className="text-sm">드래그 앤 드롭으로 파일 업로드</h5>
              <p className="text-black/50 text-sm">(파일 형식)</p>
            </div>
          )}
        </div>
      ) : (
        <CustomSimpleBar className="h-[146px] rounded-[10px] bg-[#F1F4FF]/20 border border-blue/20">
          <ul>
            {VERIFICATION_DATA_LIST.map((data, index) => (
              <li
                key={index}
                onClick={() => onChange(data)}
                className={cn(
                  "flex items-center h-[38px] px-6 border-b border-blue/20 last:border-none cursor-pointer hover:bg-[#F1F4FF]/50",
                  data === value && "bg-[#F1F4FF]/50"
                )}
              >
                <div className="flex justify-between items-center w-full text-[#373737]">
                  <span>{data}</span>
                  <Check
                    className={cn(
                      "size-4",
                      data === value ? "block" : "hidden"
                    )}
                  />
                </div>
              </li>
            ))}
          </ul>
        </CustomSimpleBar>
      )}
    </div>
  );
};

export default VerificationDataConfig;
