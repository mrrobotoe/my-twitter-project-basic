import { styled } from 'styled-components'

import { Form, Label, Submit, TextAreaField } from '@redwoodjs/forms'

export const FormContainer = styled(Form)`
  width: 100%;
`

export const LabelContainer = styled(Label)`
  font-size: var(--s-1);
  color: var(--color-gray);
`

export const TextAreaFieldContainer = styled(TextAreaField)`
  width: 100%;
  box-shadow: none;
  border: none;
  border-radius: var(--s-2);
  background-color: var(--color-light);
  padding: var(--s-1);
  font-size: var(--s0);
  resize: none;
  line-height: var(--s1);
`

export const SubmitContainer = styled(Submit)`
  background-color: var(--color-dark);
  color: var(--color-light);
  text-transform: uppercase;
  border: none;
  padding: var(--s-2);
  border-radius: var(--s1);
  font-size: var(--s-1);
  border: 1px solid var(--color-dark);

  &:hover:enabled {
    background-color: var(--color-light);
    color: var(--color-dark);
    border: 1px solid var(--color-dark);
  }

  &:disabled {
    background-color: #cdcbcb;
    border: 1px solid #cdcbcb;
  }
`
