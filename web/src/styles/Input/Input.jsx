import { Stack } from '../Stack/Stack.styled';
import { Input, Label } from './Input.styled';
import PropTypes from 'prop-types';

export const InputItem = (props) => {
  return (
    <Stack space='0.5rem'>
      <Label htmlFor={props.label}>
        {props.label.charAt(0).toUpperCase() + props.label.slice(1)}
      </Label>
      <Input required as='input' type={props.type} name={props.label} />
    </Stack>
  );
};

InputItem.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
};
