import React, { useEffect } from 'react';
import { ModalWrapper } from './style';
import Button from '../button';

interface ButtonInterface {
	clickHandler: () => any;
	buttonText: string | any;
	loading?: boolean;
}
interface ModalInterface {
	header: {
		iconColor?: string;
		icon?: string;
		title?: string;
	},
	footer: {
		footerAlign?: string;
		buttons: ButtonInterface[]
	};
	show: boolean;
	close?: Function;
	closeHandler?: () => void;
	children?: React.ReactComponentElement<any>;
	body?: React.ReactComponentElement<any>;
	loading?: boolean;
}
const Modal = (props: ModalInterface) => {
	useEffect(() => {
		if (props.show) {
			document.body.style.overflow = 'hidden';
		}
		return () => {
			document.body.style.overflow = 'auto';
		};
	}, [props.show]);

	if (!props.show) {
		return <div/>;
	}

	return (
		<ModalWrapper
			show={props.show}
			buttonAlign={props.footer && props.footer.footerAlign}
		>
			<div className='overlay' onClick={props.loading ? () => false : () => props.closeHandler} />
			<div className='modal-container'>
				{props.header && (
					<div className='modal-header'>
						{props.header && props.header.icon && (
							<i className={`modal-title-icon no-select ${props.header && props.header.icon}`} />
						)}
						<div
							className='modal-header-title'
							dangerouslySetInnerHTML={{
								__html: (props.header && props.header.title) || '',
							}}
						/>
					</div>
				)}
				<div className='modal-body'>{props.children || props.body}</div>
				{props.footer && (
					<div className='modal-footer'>
						{props.footer.buttons &&
							props.footer.buttons.map(({ loading, clickHandler, buttonText }: ButtonInterface, key: number) => (
								<React.Fragment key={key}>
									<Button loading={loading || false} disabled={loading} onClick={() => clickHandler()} type='primary' size='sm'>{buttonText}</Button>
									{(props.footer.buttons && props.footer.buttons.length - 1) !== key ? (
										<div className='button-separator' />
									) : (
										''
									)}
								</React.Fragment>
							))}
					</div>
				)}
			</div>
		</ModalWrapper>
	);
};
export default Modal;
