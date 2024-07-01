import { createInterface } from "readline";
import commands from "./commands";
import log4js from 'log4js';

export const logger = log4js.getLogger('Cardinal');
logger.level = 'all';

export const info = (message: any)=>{
  logger.info(message);
  rl.prompt(true);
}

export const rl = createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> ",
});

export const initalizeCLI = () => {
  rl.prompt(true);
  
  rl.on('line', (line: string) => {
    const input = line.trim().split(' ');
    const command = input[0];
    const args = input.slice(1).join(' ');
  
    try {
      commands[command](args);
    } catch (error) {
      if (error instanceof TypeError) {
        logger.info("Unknown command.");
      }
    }
    rl.prompt(true);
  }).on('close', () => {
    process.exit(0);
  });
}
