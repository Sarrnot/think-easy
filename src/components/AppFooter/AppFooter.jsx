import React from "react";
import styles from "./AppFooter.module.css";
import { PhoneIphone, MailOutline, AccountCircle } from "@material-ui/icons/";

function AppFooter() {
  const iconStyles = {
    marginRight: "8px",
    color: "rgb(158, 0, 0)",
    fontSize: "35px",
  };

  return (
    <div className={styles.footer}>
      <div className={`${styles.contact} container`}>
        <div>
          <AccountCircle style={iconStyles} /> Zdeněk Horáček
        </div>
        <div>
          <PhoneIphone style={iconStyles} /> 776 457 107
        </div>
        <div>
          <MailOutline style={iconStyles} /> urassus@gmail.com
        </div>
      </div>
    </div>
  );
}

export default AppFooter;
