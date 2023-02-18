import PropTypes from "prop-types";
import classNames from "classnames";
function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classNames(
    rest.className,
    "flex items-center px-2 py-1 border",
    {
      "border-blue-500 bg-blue-500 ": primary,
      "border-gray-900 bg-gray-900 ": secondary,
      "border-green-500 bg-green-500 ": success,
      "border-yellow-400 bg-yellow-400 ": warning,
      "border-red-500 bg-red-500 ": danger,
      "text-white":
        !outline && (primary || secondary || success || warning || danger),
      "rounded-full": rounded,
      "bg-white": outline,
      "text-blue-500": outline && primary,
      "text-gray-900": outline && secondary,
      "text-green-500": outline && success,
      "text-yellow-900": outline && warning,
      "text-red-900": outline && danger,
    }
  );

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

Button.propTypes = {
  checkButtonPurposes: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1)
      return new Error("Only one purpose for the button can be set");
  },
};

export default Button;
