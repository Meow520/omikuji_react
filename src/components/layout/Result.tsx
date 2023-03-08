import { FC, useState } from "react";
import { Button } from "../atoms/Button";

type Props = {
  isResult: boolean;
  fortune: string;
  isLoading: boolean;
  setIsResult: React.Dispatch<React.SetStateAction<boolean>>;
  handleOpenResult: () => void;
};

export const Result: FC<Props> = (props) => {
  const handleCloseResult = () => {
    props.setIsResult(false);
  };

  const fortuneColor: string =
    props.fortune === "凶" ||
    props.fortune === "大凶" ||
    props.fortune === "末吉"
      ? "text-black"
      : "text-red-500";

  return (
    <div
      hidden={!props.isResult}
      className="w-screen h-screen absolute top-0 left-0 bg-modalwindow"
    >
      <div className="bg-white h-2/3 w-96 mx-auto my-20 rounded-md animate-modalwindow py-12">
        <div className="h-2/3 my-5">
          <div className="my-auto text-2xl text-center">あなたの運勢は</div>
          <div
            className={`${fortuneColor} ${"text-6xl font-bold text-center p-0 mt-16"}`}
          >
            {props.fortune}
          </div>
        </div>
        <div className="flex justify-center">
          <Button
            size="w-40 h-16"
            color="text-red-50 bg-red-700 hover:bg-red-500"
            label="もう一度"
            onclick={props.handleOpenResult}
          />
          <Button
            size="w-40 h-16"
            color="text-red-50 bg-red-700 hover:bg-red-500"
            label="終了"
            onclick={handleCloseResult}
          />
        </div>
      </div>
    </div>
  );
};
