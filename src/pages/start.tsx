import * as React from 'react';
import {
  Container,
  Header,
  Content,
  Sidenav,
  Footer,
  Sidebar,
  Navbar,
  Nav,
  Button,
} from "rsuite";
import "rsuite/styles/index.less";
import axios from "axios";
import { getCookie, setCookie } from "../utils/util";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Users from "./users";
import Sitemaps from "./sitemaps";
import Contact from "./contact";
import Courses from "./courses";
import About from "./about";

interface StartState {
  activeKey: string;
  expand: boolean;
  isShowProfilePanel: boolean;
  userFullname: string;
}
interface StartProps {}

let _this: any;
export default class Start extends React.Component<StartProps, StartState> {
  constructor(props: StartProps) {
    super(props);
    _this = this;

    this.state = {
      activeKey: "home",
      expand: true,
      isShowProfilePanel: false,
      userFullname: getCookie("fullname"),
    };

    let token = getCookie("token");

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "http://localhost:8000/api/user/getall",
      headers: {
        Authorization: "Bearer " + token,
      },
    };

    axios
      .request(config)
      .then((response) => {
        debugger;
        console.log(JSON.stringify(response.data));
      })
      .catch((error) => {
        debugger;
        console.log(error);
      });
  }

  componentDidMount = () => {
    document.body.addEventListener("click", (e) => this.bodyClick(e));
  };
  componentWillUnmount = () => {
    document.body.removeEventListener("click", (e) => this.bodyClick(e));
  };

  bodyClick = (e: any) => {
    // debugger;
    // if (
    //   e.target.attributes["name"] &&
    //   e.target.attributes["name"].value != "profile-arrow"
    // )
    // this.setState({ isShowProfilePanel: false });
  };

  logoutClick = () => {
    setCookie("token", "", 1);
    window.location.href = "/#/login";
  };

  profileIconMouseUp = (e: any) => {
    this.setState({ isShowProfilePanel: !this.state.isShowProfilePanel });
  };

  changeActiveKey = (e: any) => {
    debugger;
    this.setState({ activeKey: e });
  };

  renderBody(param: any) {
    switch (param) {
      case "sitemaps":
        return <Sitemaps />;
      case "contact":
        return <Contact />;
      case "courses":
        return <Courses />;
      case "users":
        return <Users />;
      case "about":
        return <About />;
      default:
        return "";
    }
  }

  render() {
    return (
      <div className="show-container h-100 w-100 rtl">
        <Container>
          <Sidebar style={{ borderLeft: "1px solid #ffffff" }}>
            <Sidenav.Header>
              <div className="logo-title">
                <span> عنوان</span>
              </div>
            </Sidenav.Header>
            <Sidenav
              expanded={this.state.expand}
              defaultOpenKeys={["3"]}
              appearance="subtle"
            >
              <Sidenav.Body>
                <Nav
                  onSelect={this.changeActiveKey}
                  activeKey={this.state.activeKey}
                >
                  <Nav.Item eventKey="home" key="1">
                    صفحه اصلی
                  </Nav.Item>
                  <Nav.Item eventKey="about" key="2">
                    درباره ما
                  </Nav.Item>
                  <Nav.Menu
                    eventKey="3"
                    trigger="hover"
                    title="آموزش"
                    placement="rightStart"
                  >
                    <Nav.Item eventKey="users" key="3-1">
                      لیست کاربران
                    </Nav.Item>
                    <Nav.Item eventKey="courses" key="3-2">
                      لیست دوره ها
                    </Nav.Item>
                    <Nav.Item eventKey="sitemaps" key="3-3">
                      نقشه سایت
                    </Nav.Item>
                    <Nav.Item eventKey="contact" key="3-4">
                      تماس با ما
                    </Nav.Item>
                  </Nav.Menu>
                  <Nav.Menu
                    eventKey="4"
                    trigger="hover"
                    title="تنظیمات"
                    placement="rightStart"
                  >
                    <Nav.Item eventKey="4-1">Applications</Nav.Item>
                    <Nav.Item eventKey="4-2">Websites</Nav.Item>
                    <Nav.Item eventKey="4-3">Channels</Nav.Item>
                    <Nav.Item eventKey="4-4">Tags</Nav.Item>
                    <Nav.Item eventKey="4-5">Versions</Nav.Item>
                  </Nav.Menu>
                </Nav>
              </Sidenav.Body>
            </Sidenav>
            {/* <NavToggle expand={expand} onChange={() => setExpand(!expand)} /> */}
          </Sidebar>
          <Container>
            <Header>
              <div className="header">
                <div className="logout-panel relative">
                  <Navbar appearance="inverse">
                    <Navbar.Brand>
                      {/* <Button
                          onClick={this.logoutClick}
                          style={{
                            width: "7em",
                            height: "3em",
                          }}
                        >
                          خروج
                        </Button> */}
                    </Navbar.Brand>
                    <FontAwesomeIcon
                      icon={faChevronDown}
                      name="profile-arrow"
                      className="profile-icon"
                      onMouseUp={this.profileIconMouseUp}
                    />
                    <div className="profile-panel">
                      {this.state.userFullname}
                    </div>
                    {this.state.isShowProfilePanel && (
                      <div className="logout-popup-panel">
                        <span>پروفایل</span>
                        <span>تغییر کلمه عبور</span>
                        <span onClick={this.logoutClick}>خروج</span>
                      </div>
                    )}
                  </Navbar>
                </div>
              </div>
            </Header>
            <Content>
              <div className="centeral-div">
                {this.renderBody(this.state.activeKey)}
              </div>
            </Content>
            <Footer className="footer">Copyright © 2010-2023</Footer>
          </Container>
        </Container>
      </div>
    );
  }
}