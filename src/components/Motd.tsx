import React, { useContext } from 'react';
import TerminalContext from '../TerminalContext';

const Motd = () => {
  const { motd } = useContext(TerminalContext);

  if (motd) {
    return (
      <span>
        {motd}
        {motd && (
          <span>
            <br />
            <br />
          </span>
        )}
      </span>
    );
  }

  return <span />;
};

export default Motd;
