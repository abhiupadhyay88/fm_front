import React from 'react';
import { List } from 'antd';

const getContent = (item) => {
    return (
        item.contact_business_name + ' ' + item.contact_phone
    )
}


const Facility = (props) => {

    return (
        <List
            itemLayout="horizontal"
            dataSource={props.data}
            renderItem={item => (
            <List.Item>
                <List.Item.Meta
                title={<a href={item.id}>{item.contact_name}</a>}
                description={item.contact_email}
                />
                <div>
                    {getContent(item)}
                </div>
            </List.Item>
            )}
        />
    );

}

export default Facility;
