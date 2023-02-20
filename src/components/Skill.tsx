type SkillProps = {
  category: string;
  score: number;
  icon: string;
};

const Skill = (props: SkillProps) => {
  const bgColors: { [key: string]: string } = {
    Reaction: "bg-[#fff6f5] bg-opacity-50 text-red-500 font-bold",
    Memory: "bg-[#fffbf2] bg-opacity-50 text-yellow-400 font-bold",
    Verbal: "bg-[#f2fbfa] bg-opacity-50 text-green-500 font-bold",
    Visual: "bg-[#f3f3fd] bg-opacity-50 text-indigo-600 font-bold",
  };

  const bgColor = bgColors[props.category] ?? "bg-gray-400";

  return (
    <div
      className={`lg:h-[56px] h-[58px] lg:w-[288px] w-[300px] flex justify-between items-center rounded-xl lg:mb-5 mb-4 ${bgColor}`}
    >
      <div className="flex ml-4 space-x-3 items-center">
        <img src={props.icon} alt="" className="h-[22px]" />
        <h3 className="text-[18px]">{props.category}</h3>
      </div>
      <div className="mr-3">
        <p className="text-black">
          {props.score}&nbsp;
          <span className="opacity-40"> / 100</span>
        </p>
      </div>
    </div>
  );
};

export default Skill;
