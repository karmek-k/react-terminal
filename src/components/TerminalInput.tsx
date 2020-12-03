import React, { useState } from 'react';

interface Props {
  disabled?: boolean;
}

const TerminalInput = ({ disabled }: Props) => {
  const [text, setText] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (disabled) {
      return;
    }

    setText(text + e.key);
  };

  return <span onKeyDown={handleKeyPress}>{text}</span>;
};

export default TerminalInput;
