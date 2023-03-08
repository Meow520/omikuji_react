import { FC } from "react";
type Props = {
  label: string;
  color: string;
  size: string;
  onclick: (event: React.MouseEvent<HTMLElement>) => void;
};

export const Button: FC<Props> = (props) => {
  const className: string = `${props.color} ${
    props.size
  } ${"rounded-lg px-5 py-3 mx-2"}`;
  return (
    <div>
      <button
        className={className}
        onClick={props.onclick}
      >
        {props.label}
      </button>
    </div>
  );
};
