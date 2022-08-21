import { Fragment } from "react";
export const CounterWithCustomHook = () => {
  const { counter } = useCounter();

  return (
    <Fragment>
      <h1>Counter with hook: { counter } </h1>
      <hr />
      <button className="btn btn-primary">+1</button>
      <button className="btn btn-primary">Reset</button>
      <button className="btn btn-primary">-1</button>
    </Fragment>
  );
};
