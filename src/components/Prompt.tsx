import React from 'react';

interface Props {
  userName: string;
  machineName: string;
  currentDir: string;
  promptCharacter?: string;
}

const Prompt = ({
  userName,
  machineName,
  currentDir,
  promptCharacter
}: Props) => {
  return (
    <span>
      [{userName}@{machineName} {currentDir}] {promptCharacter || '$'}{' '}
    </span>
  );
};

export default Prompt;
