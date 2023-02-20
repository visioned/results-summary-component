interface ResultProps {
  averageScore: number;
}

const Result = (props: ResultProps) => {
  return (
    <div className="lg:p-10 p-8 lg:h-[512px] lg:w-[368px] h-[380px] bg-gradient-to-t from-[#2e2be9] to-[#7857ff] lg:rounded-[33px] rounded-b-[33px] flex-col flex items-center">
      <h2 className="lg:text-[22px] text-[18px] font-bold tracking-wide opacity-70">
        Your Result
      </h2>
      <div className="lg:mt-8 mt-5 lg:h-[200px] h-[145px] lg:w-[200px] w-[145px] rounded-full bg-gradient-to-t from-[#4F39F4] to-[#4e21ca]">
        <div className="flex items-center justify-center">
          <div className="lg:mt-12 mt-8">
            <p className="flex flex-col items-center font-bold lg:text-[70px] text-[55px] leading-none text-white">
              {props.averageScore.toFixed(0)}
              <span className="text-base font-normal opacity-50">of 100</span>
            </p>
          </div>
        </div>
      </div>
      <h2 className="lg:text-3xl text-2xl font-bold pt-5 text-white opacity-95">
        Great
      </h2>
      <p className="text-center text-lg mx-3 lg:pt-[24px] pt-3 leading-tight opacity-70">
        You score higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};

export default Result;
