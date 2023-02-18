import useNavigation from "../hooks/use-navigation";
import classNames from "classnames";
export default function Link({ to, className, children, activeClassName }) {
  const { navigate, currentPath } = useNavigation();
  const handleClick = (e) => {
    if (e.metaKey || e.ctrlKey) return;
    e.preventDefault();
    navigate(to);
  };
  const classes = classNames(
    "text-blue-500 cursor-pointer",
    className,
    to === currentPath && activeClassName
  );

  return (
    <a href={to} onClick={handleClick} className={classes}>
      {children}
    </a>
  );
}
