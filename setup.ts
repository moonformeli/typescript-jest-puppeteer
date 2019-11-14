import Log from "./src/utils/Log";

function print() {
  console.log("\n");
  Log.Info("안녕하세요 Hello world");
  Log.Err("에러입니다");
}

module.exports = async () => {
  print();
};
