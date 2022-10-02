import React, {useState} from "react";
import styles from "./index.module.scss";
import classnames from "classnames";

const Tabbar = () => {
  const [index, setIndex] = useState(0);
  const tabsConfig = [
    { title: "Tab 1", content: "Content 1" },
    { title: "Tab 2", content: "Content 2" },
    { title: "Tab 3", content: "Content 3" },
  ];
  return (
    <div>
      <div className={styles["tabs-bar"]}>
        <ul className={styles["tabs-nav"]}>
          {tabsConfig.map((item, idx) => (
            <li
              role="tab"
              key={item.title}
              className={classnames(styles["tabs-tab"], {
                [styles["tabs-active"]]: index === idx,
              })}
              onClick={() => setIndex(idx)}
            >
              {item.title}
            </li>
          ))}
        </ul>
      </div>
      <div className={styles["tabs-content"]}>
        {tabsConfig.map((item, idx) => (
          <div
            key={item.content}
            role="tabpanel"
            className={classnames(styles["tabs-panel"], {
              [styles["tabs-active"]]: idx === index,
            })}
          >
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabbar;
