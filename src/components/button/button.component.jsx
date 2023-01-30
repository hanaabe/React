// import "./button.styles.scss";
import { BaseButton, GoogleSignIn,InvertedSignIn } from "./button.styles";

export const BUTTON_TYPE_CLASSES = {
  base:'base',
  google: 'Google',
  inverted: 'Inverted',
};
const getButton =(buttonType=BUTTON_TYPE_CLASSES.base)=>({
  [BUTTON_TYPE_CLASSES.base]:BaseButton,
  [BUTTON_TYPE_CLASSES.google]:GoogleSignIn,
  [BUTTON_TYPE_CLASSES.inverted]:InvertedSignIn,
}
[buttonType]);

const Button = ({ children, buttonType, ...otherProps }) => {
  const CustomButton =getButton(buttonType);
  return (
    <CustomButton {...otherProps}>
      {children}
    </CustomButton>
  );
};

export default Button;
