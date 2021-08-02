import styled from "styled-components"
type Type = React.FC<Omit<React.ComponentProps<'div'>, 'color'>>;
type Props = {
  show: boolean;
  buttonAlign: string | undefined;
};
export const ModalWrapper = styled<Type>(('div' as unknown) as Type)<Props>`
  display: ${(props: string | any): string => props.show ? 'flex' : 'none'};
  justify-content: center;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99999;
  overflow-y: auto;
  max-height: 100vh;
  border-radius: 0 !important;

  .overlay {
    display: block !important;
    background-color: rgba(0, 0, 0, 0.4);
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
  }

  .modal-container {
    border-radius: 0 !important;
    position: relative;
    z-index: 99999;
    min-width: 380px;
    //-webkit-box-shadow: 0 2px 14px 0 #fff;
    //-moz-box-shadow: 0 2px 14px 0 #fff;
    //box-shadow: 0 2px 14px 0 #fff;
    background-color: #d8b00f;
    border: 1px solid #000;

    .modal-header {
      border-radius: 0 !important;
      background-color: #fff;
      height: 60px;
      width: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      border-bottom: 1px solid #000;

      .modal-title-icon {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29px;
        height: 29px;

        &:before {
          margin: 0;
          font-size: 20px;
          color: white;
        }
      }

      .modal-header-title {
        padding: 29px 0;
        width: calc(100% - 45px);
        font-size: 17px;
        color: #000000;
        text-align: center;
        font-weight: 600;

        span {
          color: #ff0000;
        }
      }

      .modal-close-icon {
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 29px;
        height: 29px;
        border-radius: 50%;

        &:before {
          margin: 0;
          font-size: 11px;
          color: #ccc;
        }

        &:hover {
          background-color: gray;
        }
      }
    }

    .modal-body {
      min-height: calc(100% - 130px);
      width: 100%;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 16px;
    }

    .modal-footer {
      border-radius: 0 !important;
      background-color: #fff;
      height: 70px;
      width: 100%;
      display: flex;
      justify-content: ${(props: { buttonAlign: string | undefined; }) => props.buttonAlign || 'flex-end'};
      align-items: center;
      padding-left: 16px;
      padding-right: 16px;
      padding-bottom: 10px;
      border-top: 1px solid #000;

      .button-separator {
        width: 8px;
      }
    }

    @media (min-width: 1024px) {
      min-width: 473px;
    }
  }
`;
