import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';


class RegistrationForm extends React.Component {


    state = {
        register_flag: false,
        register_content: <Form onSubmitCapture={(event) => this.handleFormSubmit(event)} >
            <Form.Item label="Email" rules={[
                    { required: true, message: 'Please input your Email!' },
                    { type: 'email', message: 'The input is not valid E-mail!'}
                ]}>
                <Input name="email" placeholder="Enter a Email" />
            </Form.Item>
            <Form.Item label="First Name" rules={
                    [{required: true, message: 'Please input your First Name!' }
                ]}>
                <Input name="first_name" placeholder="Enter your First Name." />
            </Form.Item>
            <Form.Item label="Last Name" rules={
                    [{required: true, message: 'Please input your Last Name!' 
                }]}>
                <Input name="last_name" placeholder="Enter your Last Name." />
            </Form.Item>
            <Form.Item label="Password" rules={[{ required: true, message: 'Please input your password!' }]}>
                <Input name="password" placeholder="Enter Password" type="password" />
            </Form.Item>
            <Form.Item label="Confirm Password" hasFeedback rules={
                    [   
                        {
                            required: true,
                            message: 'Please confirm your password!',
                        },
                        ({ getFieldValue }) => ({
                            validator(rule, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject('The two passwords that you entered do not match!');
                            },
                        }),
                    ]}>
                <Input name="confirm" placeholder="Confirm Password" type="password" />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">Register</Button>
            </Form.Item>
        </Form>
    };

    handleFormSubmit = (event) => {
        const email = event.target.elements.email.value;
        const first_name = event.target.elements.first_name.value;
        const last_name = event.target.elements.last_name.value;
        const password1 = event.target.elements.password.value;
        const password2 = event.target.elements.confirm.value;
        axios.post('http://127.0.0.1:8000/rest_auth/registration/',{
                'email': email,
                'first_name': first_name,
                'last_name': last_name,
                'password1': password1,
                'password2': password2,
            })
            .then(res => {
                this.setState({
                    register_flag: true,
                    register_content: <h2>Thanks for Registering yourself!</h2>
                });
            })
            .catch(err => console.log(err))
    }

    render(){
        return (
            <div>
                {this.state.register_content}
            </div>
        );
    };
};


export default RegistrationForm;