import { Spin } from "antd";

import styles from "./style.module.scss";

export const Loading = () => {
  return (
    <div className={styles.spiner}>
      <Spin />
    </div>
  );
};
