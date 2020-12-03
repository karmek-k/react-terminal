import React from 'react';

interface Props {
  text?: string;
}

const Motd = (props: Props) => {
  return <p>{props.text}</p>;
};

export default Motd;
