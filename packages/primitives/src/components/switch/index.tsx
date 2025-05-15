import React from 'react';
import { clsx } from 'clsx';
import { CONTROL_PRESSED_ID } from '../../constants/device-control';
import styles from './switch.module.scss';

interface Props
  extends Omit<
    React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type' | 'size'
  > {
  usePressed?: boolean;
  size?: 'default' | 'small';
  theme?: 'light' | 'dark';
}

export function Switch(props: Props) {
  const { className, usePressed, size = 'default', theme = 'light', ...otherProps } = props;

  return (
    <div
      className={clsx(
        styles['button-switch__group'],
        size === 'small' && styles.small,
        theme === 'dark' && styles.dark
      )}
    >
      <input
        type="checkbox"
        className={clsx(styles['button-switch__item'], className)}
        {...(usePressed && { [CONTROL_PRESSED_ID]: otherProps.id })}
        {...otherProps}
      />
      <label htmlFor={otherProps.id}>
        11
        <span className={styles['button-switch__icon']} />
      </label>
    </div>
  );
}

export type { Props as SwitchProps };
