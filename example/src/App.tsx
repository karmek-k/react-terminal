import React from 'react';

import { ReactTerminal } from 'react-terminal';
import 'react-terminal/dist/index.css';

const App = () => {
  return (
    <ReactTerminal
      userName="user"
      machineName="react-pc"
      promptCharacter="$"
      currentDir="~"
      motd="Welcome to react-terminal!"
    />
  );
};

export default App;
