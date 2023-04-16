import classes from "./logisticsItem.module.css";

function LogisticsItem({ children, icon }) {
  return (
    <li className={classes.item}>
      <span className={classes.icon}>{icon}</span>
      <span className={classes.content}>{children}</span>
    </li>
  );
}

export default LogisticsItem;
