import * as React from 'react';
import { Input, InputGroup } from "rsuite";
import "rsuite/styles/index.less";
import EyeSlashIcon from "@rsuite/icons/legacy/EyeSlash";
import EyeIcon from "@rsuite/icons/legacy/Eye";
import axios from "axios";

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
export default class Register extends React.Component {
  constructor(props: any) {
    super(props);

    _this = this;
  }
  state = {
    expand: true,
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",

    firstnameErrorMessage: "",
    lastnameErrorMessage: "",
    emailErrorMessage: "",
    passwordErrorMessage: "",
    confirmPasswordErrorMessage: "",
    passwordsErrorMessage: "",

    isEnabledRegisterButton: false,
    isVisiblePassword: false,
    isVisibleConfirmPassword: false,
    isDisplayLoading: false,
    errorMessage: "",
  };

  firstnameChange = (e: any) => {
    this.setState(
      {
        firstname: e,
      },
      _this.isValidInputs()
    );
  };
  firstnameLostFocus = () => {
    debugger;
    this.setState({
      firstnameErrorMessage: _this.state.firstname ? "" : "نام الزامی است",
    });
  };
  lastnameChange = (e: any) => {
    this.setState(
      {
        lastname: e,
      },
      _this.isValidInputs()
    );
  };
  lastnameLostFocus = () => {
    debugger;
    this.setState({
      lastnameErrorMessage: _this.state.lastname
        ? ""
        : "نام خانوادگی الزامی است",
    });
  };
  emailChange = (e: any) => {
    this.setState(
      {
        email: e,
      },
      _this.isValidInputs()
    );
  };
  emailLostFocus = () => {
    if (_this.state.email) {
      var isValidEmail = _this.validateEmail(_this.state.email);
      this.setState({
        lastnameErrorMessage: isValidEmail ? "" : "ایمیل نامعتبر است",
      });
    } else {
      this.setState({
        lastnameErrorMessage: _this.state.email ? "" : "ایمیل الزامی است",
      });
    }
  };
  passwordChange = (e: any) => {
    this.setState(
      {
        password: e,
      },
      _this.isValidInputs()
    );
  };
  passwordLostFocus = () => {
    debugger;
    var isEqulsPassAndConfirm =
      _this.state.password == _this.state.confirmPassword;

    if (_this.state.confirmPassword && !isEqulsPassAndConfirm) {
      this.setState({
        passwordsErrorMessage: "رمز عبور و تکرار آن با هم یکسان نیستند",
      });
    } else {
      this.setState({
        passwordsErrorMessage: "",
        passwordErrorMessage: _this.state.confirmPassword
          ? ""
          : "رمز عبور الزامی است",
      });
    }
  };
  confirmPasswordChange = (e: any) => {
    this.setState(
      {
        confirmPassword: e,
      },
      _this.isValidInputs()
    );
  };
  confirmPasswordLostFocus = () => {
    var isEqulsPassAndConfirm =
      _this.state.password == _this.state.confirmPassword;

    if (_this.state.password && !isEqulsPassAndConfirm) {
      this.setState({
        passwordsErrorMessage: "رمز عبور و تکرار آن با هم یکسان نیستند",
      });
    } else {
      this.setState({
        passwordsErrorMessage: "",
        confirmPasswordErrorMessage: _this.state.confirmPassword
          ? ""
          : "تکرار عبور الزامی است",
      });
    }
  };

  isValidInputs = () => {
    setTimeout(() => {
      var isValidEmail = _this.validateEmail(_this.state.email);
      var isValidPassword =
        _this.state.password && _this.state.password.length > 5;
      var isValidConfirmPassword =
        _this.state.confirmPassword && _this.state.confirmPassword.length > 5;
      var isEnabled =
        _this.state.firstname &&
        _this.state.lastname &&
        _this.state.email &&
        isValidPassword &&
        isValidConfirmPassword;

      var isEqulsPassAndConfirm =
        _this.state.password == _this.state.confirmPassword;

      debugger;
      this.setState({
        isEnabledRegisterButton:
          isEnabled && isEqulsPassAndConfirm && isValidEmail,
      });
    }, 100);
  };

  clickRegisterButton = (e: any) => {
    let input = {
      Firstname: this.state.firstname,
      Lastname: this.state.lastname,
      Email: this.state.email,
      Password: this.state.password,
    };
    this.setState({ errorMessage: "", isDisplayLoading: true });

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/user/new",
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
          window.location.href = "/#/login";
        } else {
          _this.setState({
            errorMessage: "ثبت اطلاعات با مشکل مواجه شد",
            isDisplayLoading: false,
          });
        }
      })
      .catch((error) => {
        _this.setState({
          errorMessage: "ثبت اطلاعات با مشکل مواجه شد",
          isDisplayLoading: false,
        });
      });
  };

  validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  passwordVisibleIconClick = () => {
    this.setState({ isVisiblePassword: !_this.state.isVisiblePassword });
  };

  confirmPasswordVisibleIconClick = () => {
    this.setState({
      isVisibleConfirmPassword: !_this.state.isVisibleConfirmPassword,
    });
  };

  render() {
    return (
      <div className="show-fake-browser register-page">
        <Container theme="dark">
          <Content>
            <FlexboxGrid justify="center" className="login-form">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>ثبت کاربر جدید</h3>} bordered>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>نام </Form.ControlLabel>
                      <Input
                        name="firstname"
                        onChange={this.firstnameChange}
                        onBlur={this.firstnameLostFocus}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>نام خانوادگی </Form.ControlLabel>
                      <Input
                        name="lastname"
                        onChange={this.lastnameChange}
                        onBlur={this.lastnameLostFocus}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>ایمیل</Form.ControlLabel>
                      <Input
                        name="email"
                        onChange={this.emailChange}
                        onBlur={this.emailLostFocus}
                      />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>رمز عبور</Form.ControlLabel>

                      <InputGroup className="ltr">
                        <InputGroup.Button
                          onClick={this.passwordVisibleIconClick}
                        >
                          {this.state.isVisiblePassword ? (
                            <div tabIndex={-1}>
                              <EyeIcon />
                            </div>
                          ) : (
                            <div tabIndex={-1}>
                              <EyeSlashIcon />
                            </div>
                          )}
                        </InputGroup.Button>
                        <Input
                          name="password"
                          className="rtl"
                          onChange={this.passwordChange}
                          onBlur={this.passwordLostFocus}
                          type={
                            this.state.isVisiblePassword ? "text" : "password"
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>تکرار رمز عبور</Form.ControlLabel>
                      <InputGroup className="ltr">
                        <InputGroup.Button
                          onClick={this.confirmPasswordVisibleIconClick}
                        >
                          {this.state.isVisibleConfirmPassword ? (
                            <div tabIndex={-1}>
                              <EyeIcon />
                            </div>
                          ) : (
                            <div tabIndex={-1}>
                              <EyeSlashIcon />
                            </div>
                          )}
                        </InputGroup.Button>
                        <Input
                          name="confirmPassword"
                          className="rtl"
                          onChange={this.confirmPasswordChange}
                          onBlur={this.confirmPasswordLostFocus}
                          type={
                            this.state.isVisibleConfirmPassword
                              ? "text"
                              : "password"
                          }
                        />
                      </InputGroup>
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button
                          appearance="primary"
                          onClick={this.clickRegisterButton}
                          disabled={!this.state.isEnabledRegisterButton}
                        >
                          ثبت نام
                        </Button>
                        <Button appearance="secondary">
                          <a href="/#/login">صفحه ورود</a>
                        </Button>
                      </ButtonToolbar>
                    </Form.Group>
                    {this.state.firstnameErrorMessage && (
                      <>
                        <span className="warning-msg">
                          {this.state.firstnameErrorMessage}
                        </span>
                        <br />
                      </>
                    )}
                    {this.state.lastnameErrorMessage && (
                      <>
                        <span className="warning-msg">
                          {this.state.lastnameErrorMessage}
                        </span>
                        <br />
                      </>
                    )}
                    {this.state.emailErrorMessage && (
                      <>
                        <span className="warning-msg">
                          {this.state.emailErrorMessage}
                        </span>
                        <br />
                      </>
                    )}
                    {this.state.passwordErrorMessage && (
                      <>
                        <span className="warning-msg">
                          {this.state.passwordErrorMessage}
                        </span>
                        <br />
                      </>
                    )}
                    {this.state.passwordsErrorMessage && (
                      <>
                        <span className="warning-msg">
                          {this.state.passwordsErrorMessage}
                        </span>
                        <br />
                      </>
                    )}
                    {this.state.confirmPasswordErrorMessage && (
                      <>
                        <span className="warning-msg">
                          {this.state.confirmPasswordErrorMessage}
                        </span>
                        <br />
                      </>
                    )}
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
          <Footer></Footer>
        </Container>
      </div>
    );
  }
}