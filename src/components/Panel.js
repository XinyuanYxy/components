import classNames from "classnames";
export default function Panel({ children, className, ...rest }) {
  const finalClassNames = classNames(
    className,
    "cursor-pointer shadow rounded border"
  );

  return (
    <div {...rest} className={finalClassNames}>
      {children}
    </div>
  );
}
