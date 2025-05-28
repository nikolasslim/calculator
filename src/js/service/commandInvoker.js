export class CommandInvoker {
  constructor() {
    this.commands = {};
  }

  registerCommand(name, command) {
    this.commands[name] = command;
  }

  executeCommand(name, state, ...args) {
    if (this.commands[name]) {
      this.commands[name].execute(state, ...args);
    } else {
      console.warn(`Command ${name} not found`);
    }
  }
}
