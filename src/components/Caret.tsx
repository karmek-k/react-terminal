import React, { useContext } from 'react';
import TerminalContext from '../TerminalContext';

import styles from './styles/caret.module.css';

const Caret = () => {
  const { promptCharacter } = useContext(TerminalContext);

  return <span className={styles.caret}>{promptCharacter || '█'}</span>;
};

export default Caret;
