import { createContext } from 'react';

export interface TerminalSettings {
  userName: string;
  machineName: string;
  currentDir: string;
  promptCharacter?: string;
  motd?: string;
  caretCharacter?: string;
}

export default createContext<TerminalSettings>({
  userName: 'user',
  machineName: 'react-pc',
  promptCharacter: '$',
  currentDir: '~',
  motd: 'Welcome to react-terminal!'
});
