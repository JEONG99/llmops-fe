import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  return (
    <div className="fixed top-0 flex flex-col items-center justify-between w-[284px] h-full pt-10 pb-4 bg-blue-light-bg">
      <h1 className="text-center font-bold text-2xl">LLM 스튜디오</h1>
      <ul className="mb-20 mx-auto space-y-10 w-[145px]">
        <li>
          <Link
            to="/"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="text-lg">모델 관리</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/model-learning"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="text-lg">모델 학습</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
        {/*
<li>
          <Link
            to="/prompt-making"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="text-lg">프롬프트 만들기</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/prompt-gallery"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="text-lg">프롬프트 갤러리</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
          */}

        <li>
          <Link
            to="/playground"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="text-lg">플레이그라운드</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
        <li className="flex items-center cursor-pointer">
          <span className="text-lg">배포하기</span>
        </li>
        {/*
         <li>
          <Link
            to="/deploy"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className=" text-lg">배포하기</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
        */}
      </ul>
      <div>
        <img src="/image/intellisys-logo.png" alt="" width={123} height={33} />
      </div>
    </div>
  );
};

export default Sidebar;
