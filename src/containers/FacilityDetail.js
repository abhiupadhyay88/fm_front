import React from 'react';
import axios from 'axios';
import {Card} from 'antd';


class FacilityDetailView extends React.Component {

    state = {
        facility: {}
    }

    componentDidMount() {
        const facilityId = this.props.match.params.facilityId;
        const url = 'http://127.0.0.1:8000/facility/api/' + facilityId + '/'
        axios.get(url)
            .then(res => {
                this.setState({
                    facility: res.data
                });
                
            })

    }

    render() {
        return (
            <Card title={this.state.facility.contact_business_name}>
                <p>{this.state.facility.contact_name}</p>
                <p>{this.state.facility.contact_email}</p>
                <p>{this.state.facility.contact_phone}</p>
                <p>{this.state.facility.business_type}</p>
                <p>{this.state.facility.city}</p>
            </Card>
        );
    }
}

export default FacilityDetailView;