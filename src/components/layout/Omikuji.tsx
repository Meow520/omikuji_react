import omikuji from "../../assets/omikuji.jpeg";
import { FC } from "react";

type Props = {
  animate: string;
};

export const Omikuji: FC<Props> = (props) => {
  return (
    <div className="m-10">
      <img src={omikuji} alt="omikuji" className={`${props.animate} ${"w-40"}`} />
    </div>
  );
};
