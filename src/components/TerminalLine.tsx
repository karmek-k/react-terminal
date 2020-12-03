import React from 'react';

interface Props {
  userName: string;
  machineName: string;
  currentDir: string;
  prompt?: string;
}

const TerminalLine = ({ userName, machineName, currentDir, prompt }: Props) => {
  return (
    <p>
      [{userName}@{machineName} {currentDir}] {prompt || '$'}{' '}
    </p>
  );
};

export default TerminalLine;
