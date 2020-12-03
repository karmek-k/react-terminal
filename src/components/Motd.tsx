import React from 'react';

interface Props {
  text?: string;
}

const Motd = (props: Props) => {
  return (
    <p>
      {props.text}
      <br />
      <br />
    </p>
  );
};

export default Motd;
