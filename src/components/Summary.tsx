import Skill from "./Skill";

type data = {
  category: string;
  score: number;
  icon: string;
};

interface SummaryProps {
  data: data[];
}

const Summary = ({ data }: SummaryProps) => {
  return (
    <div className="lg:p-10 px-9 py-5">
      <h2 className="font-bold lg:text-[22px] text-[18px] text-black mb-5">
        Summary
      </h2>
      {data.map((test) => (
        <Skill
          key={test.category}
          category={test.category}
          score={test.score}
          icon={test.icon}
        />
      ))}
      <button className="lg:w-[288px] lg:h-[52px] w-[300px] h-[55px] rounded-full bg-[#303b59] lg:mt-4 text-white hover:bg-gradient-to-t from-[#4F39F4] to-[#6f3df8]">
        Continue
      </button>
    </div>
  );
};

export default Summary;
