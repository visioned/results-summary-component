import data from "./data.json";
import Result from "./components/Result";
import Summary from "./components/Summary";

function App() {

  return (
    <main className="h-screen flex justify-center items-center">
      <div className="lg:flex lg:flex-row flex-col lg:h-[512px] lg:w-[736px] h-[825px] w-[375px] bg-[#fff] shadow-2xl rounded-[33px]">
        <Result />
        <Summary data={data} />
      </div>
    </main>
  );
}

export default App;
