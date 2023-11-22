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


function Register() {
    return (
        <div className="show-fake-browser register-page">
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
                <Panel header={<h3>ثبت کاربر جدید</h3>} bordered>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>نام </Form.ControlLabel>
                      <Form.Control name="firstname" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>نام خانوادگی </Form.ControlLabel>
                      <Form.Control name="lastname" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>نام کاربری</Form.ControlLabel>
                      <Form.Control name="username" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>رمز عبور</Form.ControlLabel>
                      <Form.Control name="password" type="password" autoComplete="off" />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="primary">ثبت نام</Button>
                        <Button appearance="secondary" >
                            <a href="/#/login">صفحه ورود</a>
                        </Button>
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
export default Register;