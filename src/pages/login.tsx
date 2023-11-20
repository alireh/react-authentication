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
        <Container>
          <Header>
            <Navbar appearance="inverse">
              <Navbar.Brand>
                <a style={{ color: '#fff' }}>Brand</a>
              </Navbar.Brand>
            </Navbar>
          </Header>
          <Content>
            <FlexboxGrid justify="center">
              <FlexboxGrid.Item colspan={12}>
                <Panel header={<h3>Login</h3>} bordered>
                  <Form fluid>
                    <Form.Group>
                      <Form.ControlLabel>Username or email address</Form.ControlLabel>
                      <Form.Control name="name" />
                    </Form.Group>
                    <Form.Group>
                      <Form.ControlLabel>Password</Form.ControlLabel>
                      <Form.Control name="password" type="password" autoComplete="off" />
                    </Form.Group>
                    <Form.Group>
                      <ButtonToolbar>
                        <Button appearance="primary">Sign in</Button>
                        <Button appearance="link">Forgot password?</Button>
                      </ButtonToolbar>
                    </Form.Group>
                  </Form>
                </Panel>
              </FlexboxGrid.Item>
            </FlexboxGrid>
          </Content>
          <Footer>Footer</Footer>
        </Container>
      </div>
    );
}
export default Login;