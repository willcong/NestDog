import { Logger } from "@nestjs/common";

export class MyLogger extends Logger {
  log(message: string) {
    /* your implementation */
    //console.log(`MyLogger::log => ${message}`);
    super.log(message);
  }
  error(message: string, trace: string) {
    /* your implementation */
    //console.log(`MyLogger::error => ${message}`);
    super.error(message, trace);
  }
  warn(message: string) {
    /* your implementation */
    //console.log(`MyLogger::warn => ${message}`);
    super.warn(message);
  }
  debug(message: string) {
    /* your implementation */
    //console.log(`MyLogger::debug => ${message}`);
    super.debug(message);
  }
  verbose(message: string) {
    /* your implementation */
    //console.log(`MyLogger::verbose => ${message}`);
    super.verbose(message);
  }
}
