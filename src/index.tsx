import React from 'react';
import Motd from './components/Motd';
import TerminalLine from './components/TerminalLine';

import styles from './main.module.css';

interface Props {
  userName: string;
  machineName: string;
  currentDir: string;
  prompt?: string;
}

export const ReactTerminal = (props: Props) => {
  return (
    <div className={styles.terminal}>
      <Motd text="Welcome to react-terminal!" />
      <TerminalLine
        userName={props.userName}
        machineName={props.machineName}
        currentDir={props.currentDir}
        prompt={props.prompt}
      />
    </div>
  );
};
