import React from 'react';

import Prompt from './Prompt';

interface Props {
  userName: string;
  machineName: string;
  currentDir: string;
  promptCharacter?: string;
}

const TerminalLine = (props: Props) => {
  return (
    <Prompt
      userName={props.userName}
      machineName={props.machineName}
      currentDir={props.currentDir}
      promptCharacter={props.promptCharacter}
    />
  );
};

export default TerminalLine;
