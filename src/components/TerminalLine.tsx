import React from 'react';

import Caret from './Caret';
import Prompt from './Prompt';

interface Props {
  userName: string;
  machineName: string;
  currentDir: string;
  promptCharacter?: string;
  caretCharacter?: string;
}

const TerminalLine = (props: Props) => {
  return (
    <span>
      <Prompt
        userName={props.userName}
        machineName={props.machineName}
        currentDir={props.currentDir}
        promptCharacter={props.promptCharacter}
      />
      <Caret character={props.caretCharacter} />
    </span>
  );
};

export default TerminalLine;
