import { Stack } from '../Stack/Stack.styled';
import { Button as StyledButton } from './Button.styled';
import { PropTypes } from 'prop-types';

export const Button = (props) => {
  return (
    <Stack>
      <StyledButton type={props.buttonType}>{props.label}</StyledButton>
    </Stack>
  );
};

Button.propTypes = {
  buttonType: PropTypes.string,
  label: PropTypes.string,
};
