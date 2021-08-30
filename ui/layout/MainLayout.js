import React,{useState} from 'react';
import { Layout, Menu,Breadcrumb,Button } from 'antd';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  DashboardOutlined,
  FileTextOutlined,
  UploadOutlined,
  ShoppingCartOutlined
} from '@ant-design/icons';
import styles from "./MainLayout.module.scss";

const { Header, Sider, Content } = Layout;

const MainLayout = ({children})=> {

  const [collapsed,setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed(!collapsed)
  
  };




    return (
      <Layout className={styles.fullscreen}>
        <Sider  trigger={null} collapsible collapsed={collapsed}>
          <div ><h1  className={styles.text} >Ticket</h1></div>
          <Menu  theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item key="1" icon={<DashboardOutlined />}>
                Dashboard
            </Menu.Item>
            <Menu.Item key="2" icon={<FileTextOutlined />}>
              Report
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className={styles.site_layout}>
          <Header style={{width:"100%"}} className={styles.site_layout_background} style={{ padding: 0 }}>
       
            {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
              className: `${styles.trigger}`,
              onClick: toggle,
            })}
    
             
            <Button className={styles.main_cart_btn}
              icon={
                <ShoppingCartOutlined
                  style={{
                    marginRight: "5px",
                    fontSize: "20px",
                    color: "#1890ff",
                  }}
                />
              }
            >
             1
            </Button>
         
          </Header>
          <Breadcrumb style={{ margin: '16px 16px 0px 16px' }}>
          <Breadcrumb.Item>Home</Breadcrumb.Item>
          <Breadcrumb.Item>Dashboard</Breadcrumb.Item>
        </Breadcrumb>
          <Content
            className={styles.site_layout_background}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
              {children}
          </Content>
        </Layout>
      </Layout>
    );
  
}
export default MainLayout;
