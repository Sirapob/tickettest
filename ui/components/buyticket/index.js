import { Steps, Button, message } from "antd";
import React, { useState } from "react";
import styles from "./Buyticket.module.scss";
import {
  LoadingOutlined,
  IdcardOutlined,
  CheckCircleOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";
import TableOrderComponent from "./TableOrder";
import { useTicketTypeContext } from "../../contexts/TicketTypeContext";
const { Step } = Steps;

const BuyTicketComponent = () => {
  const [current, setCurrent] = useState(0);
  const {TicketTypeProvider}  = useTicketTypeContext()
  console.log("🚀 ~ file: index.js ~ line 17 ~ BuyTicketComponent ~ TicketTypeProvider", TicketTypeProvider)
  
  const steps = [
    {
      title: "Order",
      content: <TableOrderComponent current={current === 1} />,
      icon: current === 0 ? <LoadingOutlined /> : <IdcardOutlined />,
    },
    {
      title: "Confirm",
      content: <TableOrderComponent current={current === 1} />,
      icon: current === 1 ? <LoadingOutlined /> : <CheckCircleOutlined />,
    },
  ];

  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };

  return (
    <>
      <Steps current={current}>
        {steps.map((item) => (
          <Step key={item.title} title={item.title} icon={item.icon} />
        ))}
      </Steps>
      <div className={styles.steps_content}>{steps[current].content}</div>
      <div className={styles.ssteps_action}>
      
      </div>
      <div >
        <div className={styles.leftfoot}>
          total(<span>1000</span>)
        </div>
        <div className={styles.leftfoot}></div>
        <div className={styles.rightfoot}>
    

          {current < steps.length - 1 && (
           <Button
           icon={<ShoppingCartOutlined />}
           className={styles.largefont}
           type="primary"
           onClick={() => next()}
         >
           Confirm
         </Button>
        )}
        {current === steps.length - 1 && (
          <Button
            type="primary"
            onClick={() => message.success("Processing complete!")}
          >
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: "0 8px" }} onClick={() => prev()}>
            Back
          </Button>
        )}
        </div>
        <div className={styles.rightfoot}>
          Price ：<span className={styles.price}>1,000</span>
        </div>

        <div className={styles.sale}>
          Discount ：<span className={styles.discount}>100</span>
        </div>
  
      </div>
    </>
  );
};

export default BuyTicketComponent;
