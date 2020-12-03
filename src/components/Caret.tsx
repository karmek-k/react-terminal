import React from 'react';

import styles from './styles/caret.module.css';

interface Props {
  character?: string;
}

const Caret = (props: Props) => {
  return <span className={styles.caret}>{'█' || props.character}</span>;
};

export default Caret;
