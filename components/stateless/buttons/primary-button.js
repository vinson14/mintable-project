import BaseButton from "./base-button";

const PrimaryButton = ({ children, ...props }) => {
  return <BaseButton {...props}>{children}</BaseButton>;
};

export default PrimaryButton;
