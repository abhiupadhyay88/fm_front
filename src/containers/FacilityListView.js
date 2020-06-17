import React from 'react';
import axios from 'axios';
import Facility from '../components/Facility';
import { Button } from 'antd';
import { Link } from 'react-router-dom';


class FacilityListView extends React.Component {

    state = {
        facilities: []
    }

    componentDidMount() {
        axios.get('http://127.0.0.1:8000/facility/api/')
            .then(res => {
                this.setState({
                    facilities: res.data
                });
                
            })

    }

    render() {
        return (
            <div>
                <Facility data={this.state.facilities}/>
                <Link to='/facility_register/'><Button type="primary" htmlType="submit">Register New Facility</Button></Link>
            </div>
        );
    }
}

export default FacilityListView;