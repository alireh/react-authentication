import * as React from "react";
import axios from "axios";
import "../styles/login.sass";

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

  goToRegisterPage = () => {
    location.href = "/#/register1";
  };

  render() {
    return (
      <div className="login1-container">
        <div className="login1">
          <div className="login1-container">
            <h1>ورود</h1>
            <input type="email" placeholder="ایمیل" />
            <input type="password" placeholder="رمز عبور" />
            <br />
            <input type="checkbox" />
            <span>ما را با خاطر داشته باش</span>
            <a href="#">فراموشی رمز عبور</a>
            <button>ورود</button>
            <ul>
              <li>
                <i className="fab fa-facebook-f fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-twitter fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-github fa-2x"></i>
              </li>
              <li>
                <i className="fab fa-linkedin-in fa-2x"></i>
              </li>
            </ul>
            <div className="clearfix"></div>
            <span className="copyright">&copy;2019</span>
          </div>
        </div>
        <div className="welcome1">
          <div className="welcome1-container">
            <i className="fas fa-user-plus fa-5x"></i>
            <h2>خوش آمدید</h2>
            <p>با ما خریدی به یاد ماندنی را ثبت کنید</p>
            <button onClick={this.goToRegisterPage}>
              ثبت نام <i className="fas fa-arrow-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
