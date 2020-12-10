import React from 'react';

import Caret from './Caret';
import Prompt from './Prompt';
import TerminalInput from './TerminalInput';

const TerminalLine = () => {
  return (
    <span>
      <Prompt />
      <TerminalInput />
      <Caret />
    </span>
  );
};

export default TerminalLine;
