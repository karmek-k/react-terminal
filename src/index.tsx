import React from 'react';
import Motd from './components/Motd';

import styles from './main.module.css';

export const ReactTerminal = () => {
  return (
    <div className={styles.terminal}>
      <Motd text="Welcome to react-terminal!" />
    </div>
  );
};
