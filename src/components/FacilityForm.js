import React from 'react';
import { Form, Input, Button } from 'antd';
import axios from 'axios';

class FacilityForm extends React.Component {

    state = {
        register_flag: false,
        register_content: <Form onSubmitCapture={(event) => this.handleFormSubmit(event)} >
            <Form.Item label="Name">
                <Input name="contact_name" placeholder="Enter Name of the Facility Owner" />
            </Form.Item>
            <Form.Item label="Business Name">
                <Input name="contact_business_name" placeholder="Enter Business Name of the Facility" />
            </Form.Item>
            <Form.Item label="Email">
                <Input name="contact_email" placeholder="Enter Email of the Facility" />
            </Form.Item>
            <Form.Item label="Phone">
                <Input name="contact_phone" placeholder="Enter contact number of the Facility" />
            </Form.Item>
            <Form.Item label="Business Type">
                <Input name="business_type" placeholder="Enter Business Type of the Facility" />
            </Form.Item>
            <Form.Item label="City">
                <Input name="city" placeholder="Enter the city in which Facility operates" />
            </Form.Item>
            <Form.Item >
                <Button type="primary" htmlType="submit">Register</Button>
            </Form.Item>
        </Form>
    };

    handleFormSubmit = (event) => {
        const contact_name =  event.target.elements.contact_name.value;
        const contact_business_name = event.target.elements.contact_name.value;
        const contact_email = event.target.elements.contact_email.value;
        const contact_phone = event.target.elements.contact_phone.value;
        const business_type = event.target.elements.business_type.value;
        const city = event.target.elements.city.value;
        axios.post('http://127.0.0.1:8000/facility/api/',{
                'contact_name': contact_name,
                'contact_phone': contact_phone,
                'contact_business_name': contact_business_name,
                'contact_email': contact_email,
                'business_type': business_type,
                'city': city
            })
            .then(res => {
                this.setState({
                    register_flag: true,
                    register_content: <h2>Thanks for Registering your Business!</h2>
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


export default FacilityForm;