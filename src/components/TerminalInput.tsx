import React, { useState } from 'react';

interface Props {
  disabled?: boolean;
}

const TerminalInput: React.FC<Props> = props => {
  const [text, setText] = useState<string>('');

  const handleKeyPress = (e: React.KeyboardEvent<HTMLSpanElement>) => {
    if (props.disabled) {
      return;
    }

    setText(text + e.key);
  };

  return <span onKeyDown={handleKeyPress}>{text}</span>;
};

export default TerminalInput;
