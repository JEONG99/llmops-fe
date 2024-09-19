import { useDebounce } from "@/hooks/use-debounce";
import { useNavigate } from "@tanstack/react-router";
import { ChangeEventHandler, useEffect, useState } from "react";

const SearchInput = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState("");
  const debouncedValue = useDebounce(value);

  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  useEffect(() => {
    const query = {
      keyword: value,
    };
    navigate({ to: "/", search: query });
  }, [debouncedValue]);

  return (
    <div className="relative flex items-center">
      <input
        value={value}
        onChange={onChange}
        placeholder="모델명, 태그 검색"
        className="h-12 w-[470px] py-3 pl-5 pr-10 bg-gray-20 rounded-[30px] border border-gray-50 focus:outline-none placeholder:text-sm"
      />
      <img
        src="/icon/search-icon.svg"
        alt=""
        className="absolute right-3 size-6"
      />
    </div>
  );
};

export default SearchInput;
