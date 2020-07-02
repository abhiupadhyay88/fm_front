import React from 'react';
import RegistrationForm from '../components/RegistrationForm';

const RegistrationFormView = (props) => {
    
    return (
        <div>
            <h2>Signup</h2>
            <RegistrationForm {...props}/>
        </div>
    );
};


export default RegistrationFormView;