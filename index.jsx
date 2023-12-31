import React from "react";
import { StyledButton } from "./src/components/atoms/Button/style";

const Button = ({ children, variant, ...props }) => {
  // variant :
  // primary ,secondary ,warning ,success
  // button take width 100% , make sure to wrap it with styled wrapper

  return (
    <StyledButton variant={variant} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;
