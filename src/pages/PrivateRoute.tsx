import * as React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { getCookie } from "../utils/util";
import { ReactNode } from "react";

let token: any;

interface MyComponentProps {
  children: ReactNode;
}

export class PrivateRoute extends React.Component<MyComponentProps> {
  constructor(props: MyComponentProps) {
    debugger;
    super(props);
  }
  componentDidMount() {
    debugger;
  }
  render() {
    const { children } = this.props;
    debugger;
    token = getCookie("token");
    return token ? ( //   <React.Component {...this.props} />
      <>{children}</>
    ) : (
      <Navigate to={{ pathname: "/login" }} />
    );
  }
}
