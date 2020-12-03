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
    <p>
      [{userName}@{machineName} {currentDir}] {promptCharacter || '$'}{' '}
    </p>
  );
};

export default Prompt;
