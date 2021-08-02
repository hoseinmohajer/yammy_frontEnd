import styled from 'styled-components';
// @ts-ignore

interface TypeInterface {
	type: string
}
interface DisableInterface {
	isDisabled: boolean
}
interface SizeInterface {
	size: string
}
// @ts-ignore: Unreachable code error
export const ButtonWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	${({ type }: TypeInterface) => {
		switch (type) {
			case 'primary':
				return `
				background-color: #212020;
				color: #ededed;
				border: 1px solid #eaeaea;
				&:hover {
					background-color: #e3d107;
					color: #000;
					border: 1px solid #e3d107;	
				}
			`;
			case 'secondary':
				return `
				background-color: #ffffff;
				color: #101010;
				&:hover {
					background-color: #000;
					color: #fff;
				}
			`;
		}
	}};
	${({isDisabled = false}: DisableInterface) => {
		return `
			opacity: ${isDisabled ? .5 : 1};
			cursor: ${isDisabled ? 'not-allowed' : 'pointer'}
		`;
	}};
	${({size}: SizeInterface) => {
		switch (size) {
			case 'sm':
				return `
					padding: 4px 12px;
					font-size: 14px;
					font-weight: normal;
					min-width: 70px;
					min-height: 20px;
				`;
			case 'md':
				return `
					padding: 13px 23px;
					font-size: 16px;
					font-weight: normal;
					min-width: 171px;
					min-height: 44px;
					@media (min-width: 1024px) {
						font-size:18px;
					}
				`;
			case 'sm-wide':
				return `
					padding: 8px 23px;
					font-size: 20px;
					font-weight: normal;
					min-width: 185px;
					min-height: 30px;
				`;
		}
	}};
`;



