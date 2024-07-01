import { info } from "./cli";

interface Commands {
  [key: string]: (...args: any[]) => void
}

const commands: Commands = {
  welcome: () => {
    info("Welcome to the Socket.IO application of the Cardinal Systems!");
  },
  clear: () => {
    console.clear()
  }
}

export default commands;