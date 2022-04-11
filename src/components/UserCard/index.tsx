import DOMPurify from "dompurify";

import {
  DeleteFilled,
  EditFilled,
  GlobalOutlined,
  HeartOutlined,
  MailFilled,
  PhoneFilled,
} from "@ant-design/icons";
import { Card, Col, Row } from "antd";
import { User } from "../../helpers/constants/user";

import styles from "./style.module.scss";

export const UserCard = ({ user, avatar }: any) => {
  return (
    <div className={styles["user-card-container"]}>
      <Row gutter={[16, 16]}>
        {console.log("avatar", avatar)}
        {user.map((item: User) => (
          <Col xxl={6} xl={6} lg={6} md={6} sm={12} xs={24} key={item.id}>
            <Card
              hoverable
              cover={
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(avatar[0]),
                  }}
                ></div>
              }
              actions={[
                <HeartOutlined key="wishlist" style={{ color: "red" }} />,
                <EditFilled key="edit" />,
                <DeleteFilled key="remove" />,
              ]}
            >
              <h4>{item.name}</h4>
              <div className={styles["infor-container"]}>
                <MailFilled />
                <p className={styles["infor"]}>{item.email}</p>
              </div>
              <div className={styles["infor-container"]}>
                <PhoneFilled />
                <p className={styles["infor"]}>{item.phone}</p>
              </div>
              <div className={styles["infor-container"]}>
                <GlobalOutlined />
                <p className={styles["infor"]}>{item.website}</p>
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );
};
