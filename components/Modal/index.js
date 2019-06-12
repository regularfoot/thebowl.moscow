import React from 'react';
import styled, {css} from 'reshadow';
import ReactModal from 'react-modal';

ReactModal.setAppElement('#__next');

const Modal = ({isOpen, onClose, children, closeLabel}) => styled`
    ReactModal {
        max-width: 720px;
        width: 90%;
        max-height: calc(100vh - 50px);
        height: auto;

        margin: 35px auto 0;

        padding: 12px 24px;
        overflow: scroll;
        overscroll-behavior: none;
        background-color: #fff;
        box-sizing: border-box;

        &:focus {
            outline: none;
        }
    }

    .overlay {
        background-color: rgba(0, 0, 0, 0.5);
        position: fixed;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: space-around;
    }

    close {
        position: fixed;
        top: 0;
        right: 0;

        background: none;
        border: 0;
        padding: 10px;

        color: #fff;
        font-size: 30px;
        line-height: 30px;
    }

    @media only screen and (min-width: 600px) {
        ReactModal {
            margin: auto;
        }
    }
`(
    <ReactModal
        isOpen={isOpen}
        overlayClassName={styled.styles.overlay}
        shouldCloseOnOverlayClick
        onRequestClose={onClose}
    >

        <close
            as="button"
            onClick={onClose}
            aria-label={closeLabel}
        >
            ✖︎
        </close>

        {children}

    </ReactModal>
);

export default Modal;
