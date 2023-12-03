import * as React from 'react';
import { Input, Loader } from "rsuite";
import axios from "axios";
import "rsuite/styles/index.less";

import {
  Container,
  Header,
  Content,
  Footer,
  Form,
  ButtonToolbar,
  Button,
  Navbar,
  Panel,
  FlexboxGrid,
} from "rsuite";

let _this: any;
export default class Login extends React.Component {
  constructor(props: any) {
    super(props);

    _this = this;
  }
  state = {
    expand: true,
    email: "",
    password: "",
    isEnabledLoginButton: false,
    isDisplayLoading: false,
    errorMessage: "",
  };

  emailChange = (e: any) => {
    this.setState({
      email: e,
      isEnabledLoginButton: this.state.password && e,
    });
  };

  passwordChange = (e: any) => {
    this.setState({
      password: e,
      isEnabledLoginButton: this.state.email && e,
    });
  };

  inputsKeyUp = (e: any) => {
    if (e.key === "Enter" || e.keyCode === 13) {
      if (this.state.isEnabledLoginButton) {
        _this.clickInputButton(null);
      }
    }
  };

  clickInputButton = (e: any) => {
    let input = {
      Email: this.state.email,
      Password: this.state.password,
    };
    this.setState({ errorMessage: "", isDisplayLoading: true });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/user/login",
      headers: {
        "Content-Type": "application/json",
      },
      data: input,
    };

    axios
      .request(config)
      .then((response) => {
        debugger;
        if (response.data.status) {
          _this.setState({
            errorMessage: "",
            isDisplayLoading: false,
          });
          document.cookie = `token=${response.data.account.token}`;
          document.cookie = `fullname=${response.data.account.firstname} ${response.data.account.lastname} `;
          window.location.href = "/#/start";
        } else {
          _this.setState({
            errorMessage: "نام کاربری یا رمز عبور اشتباه است",
            isDisplayLoading: false,
          });
        }
      })
      .catch((error) => {
        _this.setState({
          errorMessage: "نام کاربری یا رمز عبور اشتباه است",
          isDisplayLoading: false,
        });
      });
  };

  render() {
    return (
      <div className="show-fake-browser login-page relative">
        <Container theme="dark">         
          <Content>
            <FlexboxGrid
              justify="center"
              className={
                this.state.isDisplayLoading ? "login-form blur" : "login-form"
              }
            >
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>ورود به سامانه</h3>} bordered>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>نام کاربری</Form.ControlLabel>
                      <Form.Control
                        onKeyUp={this.inputsKeyUp}
                        name="email"
                        value={this.state.email}
                        onChange={this.emailChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>رمز عبور</Form.ControlLabel>
                      <Form.Control
                        onKeyUp={this.inputsKeyUp}
                        name="password"
                        type="password"
                        autoComplete="off"
                        onChange={this.passwordChange}
                      />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button
                          appearance="primary"
                          disabled={!this.state.isEnabledLoginButton}
                          onClick={this.clickInputButton}
                        >
                          {/* <a href="/#/start" style={{color:'white'}}>ورود</a> */}
                          ورود
                        </Button>
                        <Button appearance="secondary">
                          <a href="/#/register">ثبت نام</a>
                        </Button>
                      </ButtonToolbar>
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="link">فراموشی رمز عبور؟</Button>
                      </ButtonToolbar>
                    </Form.Group>
                    <span className="warning-msg">
                      {this.state.errorMessage}
                    </span>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
              {this.state.isDisplayLoading && (
                <div className="absolute loading">
                  <Loader size="lg" content="" />
                </div>
              )}
            </FlexboxGrid>
          </Content>
          <Footer></Footer>
        </Container>
      </div>
    );
  }
}