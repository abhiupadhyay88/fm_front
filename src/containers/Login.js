import React from 'react';
import { Form, Input, Button, Spin, Alert } from 'antd';
import { NavLink } from 'react-router-dom';  
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';

const tailLayout = {
  wrapperCol: {
    offset: 8,
    span: 16,
  },
};

const LoginForm = (props) => {
  const onFinish = values => {
    console.log('Success:', values);
    props.onAuth(values.username, values.password);
    props.history.push('/');
  };

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  };

  let errorMessage = null;
  if (props.error) {
      errorMessage = (
          <p>{props.error.message}</p>
      )
  }

  return (
    <div>
        {errorMessage}
        {
            props.loading ?

            <Spin tip="Loading...">
                <Alert
                message="Login.."
                type="info"
                />
            </Spin>
            :
            <Form
            //   {...layout}
            name="basic"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            >
            <Form.Item
                label="Username"
                name="username"
                rules={[
                {
                    required: true,
                    message: 'Please input your username!',
                },
                ]}
            >
                <Input />
            </Form.Item>

            <Form.Item
                label="Password"
                name="password"
                rules={[
                {
                    required: true,
                    message: 'Please input your password!',
                },
                ]}
            >
                <Input.Password />
            </Form.Item>

            <Form.Item {...tailLayout}>
                <Button type="primary" htmlType="submit">
                Login
                </Button> Or
                <NavLink stype={{marginRight: '10px'}} to='/register/'> Signup</NavLink>
            </Form.Item>
            </Form>
        }   
    </div>
  );
};


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAuth: (username, password) => dispatch(actions.authLogin(username, password))
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);