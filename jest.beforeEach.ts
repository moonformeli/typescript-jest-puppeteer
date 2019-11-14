import Log from "./src/utils/Log";

const setLimitTime = () => {
  const HOUR = (h: number) => 1000 * 60 * 60 * h;
  jest.setTimeout(HOUR(1));
};

setLimitTime();
