import { bold, cyan, red } from "chalk";

export default class Log {
  static Info(msg?: string) {
    msg && console.info(bold.cyan(msg));
  }

  static Err(msg?: string) {
    msg && console.error(bold.red(msg));
  }
}
