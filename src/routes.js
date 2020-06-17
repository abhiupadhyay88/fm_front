import React from 'react';
import FacilityListView from './containers/FacilityListView';
import FacilityDetailView from './containers/FacilityDetail';
import { Route } from 'react-router-dom';
import RegistrationFormView from './containers/RegistrationForm';
import FacilityFormView from './containers/FacilityForm';

const BaseRouter = () => (
    <div>
        <Route exact path='/' component={FacilityListView} />
        <Route exact path='/:facilityId' component={FacilityDetailView} />
        <Route exact path='/register/' component={RegistrationFormView} />
        <Route exact path='/facility_register/' component={FacilityFormView} />
    </div>
);

export default BaseRouter;