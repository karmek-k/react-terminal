import React from 'react';

import Caret from './Caret';
import Prompt from './Prompt';
import TerminalInput from './TerminalInput';

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
      <TerminalInput />
      <Caret character={props.caretCharacter} />
    </span>
  );
};

export default TerminalLine;
