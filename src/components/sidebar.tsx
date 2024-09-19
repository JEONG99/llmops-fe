import { Link } from "@tanstack/react-router";

const Sidebar = () => {
  return (
    <div className="w-[284px] h-full py-10 bg-blue-20">
      <h1 className="text-center font-bold text-2xl">LLM Ops</h1>
      <ul className="mt-[226px] mx-auto space-y-10 w-[145px]">
        <li>
          <Link
            to="/"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="font-hailsnow text-lg">모델 관리</span>
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
            <span className="font-hailsnow text-lg">모델 학습</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/prompt-making"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="font-hailsnow text-lg">프롬프트 만들기</span>
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
            <span className="font-hailsnow text-lg">프롬프트 갤러리</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
        <li>
          <Link
            to="/deploy"
            activeProps={{ className: "[&_.active]:visible" }}
            className="flex items-center"
          >
            <span className="font-hailsnow text-lg">배포하기</span>
            <img
              src="/icon/navbar-icon.svg"
              alt=""
              className="active invisible size-8"
            />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
