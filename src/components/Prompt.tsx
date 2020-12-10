import React, { useContext } from 'react';
import TerminalContext from '../TerminalContext';

const Prompt = () => {
  const { userName, machineName, currentDir, promptCharacter } = useContext(
    TerminalContext
  );

  return (
    <span>
      [{userName}@{machineName} {currentDir}] {promptCharacter || '$'}{' '}
    </span>
  );
};

export default Prompt;
