import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Main from './src/pages/main';
import { CustomProvider } from "rsuite";
import "rsuite/dist/rsuite-rtl.css";

ReactDOM.render(
  <CustomProvider rtl>
    <Main />
  </CustomProvider>,
  document.getElementById("root")
);