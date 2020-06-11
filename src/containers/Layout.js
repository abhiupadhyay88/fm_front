import React from 'react';
import { Layout, Menu} from 'antd';
const  { Header, Content} = Layout;

const CustomLayout = (props) => {
    return (
        <Layout classname="layout">
            <Header>
                <div classname="logo" />
                <Menu 
                    theme="dark"
                    mode="horizontal"
                    defaultSelectedKeys={['2']}
                    style={{ lineHeight: '64px' }}
                >
                    <Menu.Item key="1">Customer</Menu.Item>
                    <Menu.Item key="2">Facility</Menu.Item>
                </Menu>
            </Header>

            <Content style={{ padding: '0 50px' }}>
                {/* <Breadcrumb style={{ margin: '16px 0'}}>
                    <Breadcrumb.Item>Home</Breadcrumb.Item>
                    <Breadcrumb.Item>List</Breadcrumb.Item>
                </Breadcrumb> */}
                <div style={{ background: '#fff', padding: 24, minHeight:280 }}>
                    {props.children}
                </div>
            </Content>
        </Layout>
    );
}

export default CustomLayout;

