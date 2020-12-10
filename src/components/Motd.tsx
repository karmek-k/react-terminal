import React, { useContext } from 'react';
import TerminalContext from '../TerminalContext';

const Motd = () => {
  const { motd } = useContext(TerminalContext);

  if (motd) {
    return (
      <span>
        <p>{motd}</p>
        <br />
      </span>
    );
  }

  return <span />;
};

export default Motd;
