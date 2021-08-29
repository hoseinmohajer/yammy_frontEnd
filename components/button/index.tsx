import React from 'react';
import { ButtonWrapper } from './style';

/**
 * A button component with ability to change its color and size.
 * @param {string} button text or {children}.
 * @param {string} type primary, secondary, warning, success, primary-outline, secondary-outline, warning-outline, success-outline, danger.
 * @param {function} onClick A function, when clicked on button it fires.
 * @param {string} size md: medium size, sm: small size.
 * @param {boolean} loading Show Loading... on button until it's true and while loading is true the button event is disabled.
 * @param {boolean} disabled Disable button click handler method and change some button styles'.
 * @return {component} A button component.
 * @example
 * <Button
 *    type='primary'
 *    onClick={() => console.log('who clicked me ;)')}
 *    size='md'
 *    loading={false}
 *    disabled={false}
 *  >
 *    Click me!
 *  </Button>
 * */

interface ButtonInterface {
	children: React.ReactComponentElement<any> | string,
	type: string;
	onClick: () => boolean | any;
	size: string;
	loading?: boolean;
	disabled?: boolean;
}
const Button = (props: ButtonInterface) => {
	const { children, type, onClick, size, loading = false, disabled } = props;
	return (
		<ButtonWrapper
			isDisabled={disabled}
			onClick={disabled || loading ? () => false : onClick}
			className={`no-select`}
			type={type}
			size={size}
		>
			{loading ? (
				<div>
					<small>Loading...</small>
				</div>
			) : (
				children
			)}
		</ButtonWrapper>
	);
};

export default Button;
