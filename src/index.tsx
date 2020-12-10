import React from 'react';

import Motd from './components/Motd';
import TerminalLine from './components/TerminalLine';
import styles from './main.module.css';

// for some reason eslint complains about TerminalSettings not being used
// eslint-disable-next-line no-unused-vars
import TerminalContext, { TerminalSettings } from './TerminalContext';

export const ReactTerminal = (props: TerminalSettings) => {
  return (
    <TerminalContext.Provider value={props}>
      <div className={styles.terminal}>
        <Motd />
        <TerminalLine />
      </div>
    </TerminalContext.Provider>
  );
};
