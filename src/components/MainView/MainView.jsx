import styles from "./MainView.module.css";

function MainView({ children }) {
  return <div className={styles.mainView}>{children}</div>;
}

export default MainView;
