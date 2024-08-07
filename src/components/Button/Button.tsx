import React, {FC} from 'react'
// @ts-ignore
import styles from './Button.module.scss'

interface ButtonProps {
	children: string
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button: FC<ButtonProps> = ({children, onClick}) => (
	<button className={styles.button} onClick={onClick}>
		{children}
	</button>
);
