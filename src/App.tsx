import data from "./data.json";
import Result from "./components/Result";
import Summary from "./components/Summary";
interface IData {
  category: string;
  score: number;
  icon: string;
}
function App() {
  const scores = data.map((item: IData) => item.score);
  const averageScore = scores.reduce((a, b) => a + b, 0) / scores.length;

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="lg:flex lg:flex-row flex-col lg:h-[512px] lg:w-[736px] h-[825px] w-[375px] bg-[#fff] shadow-2xl rounded-[33px]">
        <Result averageScore={averageScore} />
        <Summary data={data} />
      </div>
    </main>
  );
}

export default App;
