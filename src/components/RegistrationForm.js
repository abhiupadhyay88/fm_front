import React from 'react';
import { Form, Input, Button } from 'antd';
import { connect } from 'react-redux';
import * as actions from '../store/actions/auth';


class RegistrationForm extends React.Component {

    state = {
        register_flag: false,
    };

    handleFormSubmit = (event) => {
        const email = event.target.elements.email.value;
        const first_name = event.target.elements.first_name.value;
        const last_name = event.target.elements.last_name.value;
        const password1 = event.target.elements.password.value;
        const password2 = event.target.elements.confirm.value;
        // axios.post('http://127.0.0.1:8000/rest_auth/registration/',{
        //         'email': email,
        //         'first_name': first_name,
        //         'last_name': last_name,
        //         'password1': password1,
        //         'password2': password2,
        //     })
        //     .then(res => {
        //         this.setState({
        //             register_flag: true,
        //         });
        //     })
        //     .catch(err => console.log(err))
        this.props.onSignup(email, first_name, last_name, password1, password2);
        this.props.history.push('/');
    }

    render(){
        return (
            <div>
                {
                    this.state.register_flag ?
                    <h2>Thanks for Registering yourself!</h2>
                    :
                    <Form onSubmitCapture={(event) => this.handleFormSubmit(event)} >
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
                    
                }
            </div>
        );
    };
};


const mapStateToProps = (state) => {
    return {
        loading: state.loading,
        error: state.error
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSignup: (email, first_name, last_name, password1, password2) => 
            dispatch(
                actions.authSignup(email, first_name, last_name, password1, password2)
            )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationForm);
