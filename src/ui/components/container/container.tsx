import clsx from "clsx";
import React from "react";
interface Props {
  children: React.ReactNode;
  className?: string;
}
function Container({ children, className }: Props) {
  return (
    <div
      className={clsx(className, "w-full max-w-7xl px-5 mx-auto lg:px-10  ")}
    >
      {children}
    </div>
  );
}

export default Container;
