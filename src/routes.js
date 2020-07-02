import React from 'react';
import FacilityListView from './containers/FacilityListView';
import FacilityDetailView from './containers/FacilityDetail';
import { Route } from 'react-router-dom';
import RegistrationFormView from './containers/RegistrationForm';
import FacilityFormView from './containers/FacilityForm';
import Login from './containers/Login'

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={FacilityListView} />
        <Route exact path='/:facilityId' component={FacilityDetailView} />
        <Route exact path='/register/' component={RegistrationFormView} />
        <Route exact path='/facility_register/' component={FacilityFormView} />
        <Route exact path='/login/' component={Login} />
    </div>
);

export default BaseRouter;