import React from "react";
import { Card, Row, Col,notification } from "antd";
const { Meta } = Card;
import _ from "lodash";
import styles from "./Dashboard.module.scss";
import { useTicketTypeContext } from "../../contexts/TicketTypeContext";

const DashboardComponent = () => {
  const { ticket, status } = useTicketTypeContext();

  const ImageType = ({ type }) => {
    switch (type) {
      case "A":
        return (
          <img
            className={styles.sizeimage}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/uMfMFlvUuceEyPpotzlq.png"
          />
        );
      case "B":
        return (
          <img
            className={styles.sizeimage}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/iZBVOIhGJiAnhplqjvZW.png"
          />
        );
      case "C":
        return (
          <img
            className={styles.sizeimage}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/iXjVmWVHbCJAyqvDxdtx.png"
          />
        );
      case "D":
        return (
          <img
            className={styles.sizeimage}
            alt="example"
            src="https://gw.alipayobjects.com/zos/rmsportal/gLaIAoVWTtLbBWZNYEMg.png"
          />
        );
      default:
        return <></>;
    }
  };
  const openNotificationWithIcon = type => {
    if(type==='success'){
    notification[type]({
      message: 'Success',
      description:
        'Please check order with cart',
    });
  }else{
    notification[type]({
      message: 'Fail',
      description:
        'Please check order with cart',
    });
  }
  };

  const Columns = () => {

    if (status) {
      return (
        <>
          {_.map(ticket, function (o, index) {
            return (
              <Col key={index} span={8} style={{ padding: "10px" }}>
                <Card
                  className={styles.card}
                  hoverable
                  onClick={()=>openNotificationWithIcon('success')}
                  actions={[`${Intl.NumberFormat().format(o.price)} Bath`]}
                  cover={<ImageType type={o.type} />}
                >
                  <Meta
                    title={`Ticket Type ${o.type}`}
                    description={`Ticket Type ${o.type} Minimum: ${o.minimum}`}
                  />
                </Card>
              </Col>
            );
          })}
        </>
      );
    } else {
      return <></>;
    }
  };

  return (
    <div className={styles.site_card_wrapper}>
      <Row gutter={16}>
        <Columns />
      </Row>
    </div>
  );
};

export default DashboardComponent;
