const Star = ({ checked = false }: { checked?: boolean }) => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill={checked ? "#FCBB40" : "none"}
        fillRule="evenodd"
        clipRule="evenodd"
        d="M11.9996 17.8441L6.18281 20.9021L7.29371 14.4251L2.58786 9.838L9.09119 8.89301L11.9996 3L14.9079 8.89301L21.4113 9.838L16.7054 14.4251L17.8163 20.9021L11.9996 17.8441Z"
        stroke={checked ? "#FCBB40" : "black"}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Star;
