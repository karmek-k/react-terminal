# react-terminal

> Terminal emulator as a React component

## Install

```bash
npm install --save react-terminal
```

## Usage

```tsx
import React, { Component } from 'react';

import ReactTerminal from 'react-terminal';
import 'react-terminal/dist/index.css';

const Example = () => {
  return (
    <ReactTerminal
      userName="user"
      machineName="react-pc"
      currentDir="~"
      motd="Welcome to react-terminal!"
    />
  );
};
```

## License

MIT © [karmek-k](https://github.com/karmek-k)
