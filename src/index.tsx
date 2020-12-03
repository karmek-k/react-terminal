import React from 'react';
import Motd from './components/Motd';
import TerminalLine from './components/TerminalLine';

import styles from './main.module.css';

interface Props {
  userName: string;
  machineName: string;
  currentDir: string;
  promptCharacter?: string;
  motd?: string;
}

export const ReactTerminal = (props: Props) => {
  return (
    <div className={styles.terminal}>
      <Motd text={props.motd} />
      {props.motd && <br />}
      <TerminalLine
        userName={props.userName}
        machineName={props.machineName}
        currentDir={props.currentDir}
        promptCharacter={props.promptCharacter}
      />
    </div>
  );
};
