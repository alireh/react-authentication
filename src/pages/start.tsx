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
import CogIcon from "@rsuite/icons/legacy/Cog";
import AngleLeftIcon from "@rsuite/icons/legacy/AngleLeft";
import AngleRightIcon from "@rsuite/icons/legacy/AngleRight";
import GearCircleIcon from "@rsuite/icons/legacy/GearCircle";
import DashboardIcon from "@rsuite/icons/Dashboard";
import GroupIcon from "@rsuite/icons/legacy/Group";
import MagicIcon from "@rsuite/icons/legacy/Magic";
import "rsuite/styles/index.less";
import axios from "axios";
import { getCookie, setCookie } from "../utils/util";

import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

let _this: any;
export default class Start extends React.Component {
  constructor(props: any) {
    super(props);
    _this = this;

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

  state = {
    expand: true,
    isShowProfilePanel: false,
    userFullname: getCookie("fullname"),
  };

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

  render() {
    return (
      <div className="show-container h-100 w-100">
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
                <Nav>
                  <Nav.Item eventKey="1" active icon={<DashboardIcon />}>
                    Dashboard
                  </Nav.Item>
                  <Nav.Item eventKey="2" icon={<GroupIcon />}>
                    User Group
                  </Nav.Item>
                  <Nav.Menu
                    eventKey="3"
                    trigger="hover"
                    title="Advanced"
                    icon={<MagicIcon />}
                    placement="rightStart"
                  >
                    <Nav.Item eventKey="3-1">Geo</Nav.Item>
                    <Nav.Item eventKey="3-2">Devices</Nav.Item>
                    <Nav.Item eventKey="3-3">Brand</Nav.Item>
                    <Nav.Item eventKey="3-4">Loyalty</Nav.Item>
                    <Nav.Item eventKey="3-5">Visit Depth</Nav.Item>
                  </Nav.Menu>
                  <Nav.Menu
                    eventKey="4"
                    trigger="hover"
                    title="Settings"
                    icon={<GearCircleIcon />}
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
                      <div className="logout-popup-panel"></div>
                    )}
                  </Navbar>
                </div>
              </div>
            </Header>
            <Content></Content>
            <Footer className="footer">Copyright © 2010-2023</Footer>
          </Container>
        </Container>
      </div>
    );
  }
}