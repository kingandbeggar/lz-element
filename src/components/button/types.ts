export type ButtonType = 'primary'| 'success'| 'warning' | 'danger'| 'info'
export type ButtonSize = 'large'| 'small'
export type nativeType = 'submit'| 'reset' | 'button'

export interface buttonInstance  {
  ref: HTMLButtonElement
}

export interface ButtonProps {
  type?: ButtonType;
  size?: ButtonSize;
  plain?: boolean;
  round?: boolean;
  circle?: boolean;
  disabled?: boolean;
  nativeType?: nativeType
  autofocus?: boolean
}