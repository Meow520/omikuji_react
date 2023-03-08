import { useState } from "react";
import "./styles/App.css";
import { Result } from "./components/layout/Result";
import { Button } from "./components/atoms/Button";
import { Omikuji } from './components/layout/Omikuji';

function App() {
  const [isResult, setIsResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const omikuji = ["大吉", "吉", "中吉", "小吉", "末吉", "凶", "大凶"];
  const [fortune, setFortune] = useState("");
  const handleOpenResult = () => {
    setIsLoading(true);
    const num = Math.floor(Math.random() * omikuji.length);
    setFortune(omikuji[num]);
    setIsResult(true);
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  };

  return isLoading ? (
    <div className="h-screen w-screen flex justify-center items-center">
    <Omikuji animate="animate-omikuji" />
    </div>
  ) : (
    <div className="h-screen w-screen flex justify-center">
      <div className="my-auto">
        <div className="text-center text-6xl font-bold">おみくじ</div>
        <div className="flex justify-center my-10"><Omikuji animate=""/></div>
        <div className="flex justify-center">
          <Button
            size="w-52 h-20 text-3xl"
            color="text-red-50 bg-red-700 hover:bg-red-500"
            label="開始"
            onclick={handleOpenResult}
          />
        </div>
      </div>
      <Result
        isResult={isResult}
        fortune={fortune}
        isLoading={isLoading}
        setIsResult={setIsResult}
        handleOpenResult={handleOpenResult}
      />
    </div>
  );
}

export default App;
