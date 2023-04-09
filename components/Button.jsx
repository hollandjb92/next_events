import Link from "next/link";
import classes from "../styles/button.module.css";

function Button({ children, link }) {
  return (
    <Link href={link} className={classes.btn}>
      {children}
    </Link>
  );
}

export default Button;
