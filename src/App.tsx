import data from "../data.json";

function App() {
  return (
    <main className="h-screen flex justify-center items-center">
      <div className="flex h-[512px] w-[736px] bg-[#fff] shadow-xl rounded-[33px]">
        <div className="p-10 h-[512px] w-[368px] bg-[#4F39F4] rounded-[33px] flex-col flex items-center">
          <h2>Your Result</h2>
          <div className="h-[200px] w-[200px] rounded-full bg-black"></div>
        </div>

        <h2 className="text-black">test</h2>
        <div className="flex items-center"></div>
      </div>
    </main>
  );
}

export default App;
