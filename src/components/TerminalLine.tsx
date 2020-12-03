import React from 'react';

interface Props {
  userName: string;
  machineName: string;
  currentDir: string;
  promptCharacter?: string;
}

const TerminalLine = ({
  userName,
  machineName,
  currentDir,
  promptCharacter
}: Props) => {
  return (
    <p>
      [{userName}@{machineName} {currentDir}] {promptCharacter || '$'}{' '}
    </p>
  );
};

export default TerminalLine;
