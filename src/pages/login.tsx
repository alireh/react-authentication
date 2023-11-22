import * as React from 'react';
import { Input } from 'rsuite';
import 'rsuite/styles/index.less';

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
    FlexboxGrid
  } from 'rsuite';


function Login() {
    return (
        <div className="show-fake-browser login-page">
        <Container theme="dark">
          {/* <Header>
            <Navbar appearance="inverse">
              <Navbar.Brand>
                
              </Navbar.Brand>
            </Navbar>
          </Header> */}
          <Content>
            <FlexboxGrid justify="center" className="login-form">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>ورود به سامانه</h3>} bordered>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>نام کاربری</Form.ControlLabel>
                      <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>رمز عبور</Form.ControlLabel>
                      <Form.Control name="password" type="password" autoComplete="off" />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="primary">
                            <a href="/#/start" style={{color:'white'}}>ورود</a>
                        </Button>
                        <Button appearance="secondary" >
                            <a href="/#/register">ثبت نام</a>
                        </Button>
                      </ButtonToolbar>
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="link">فراموشی رمز عبور؟</Button>
                      </ButtonToolbar>
                    </Form.Group>
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
export default Login;