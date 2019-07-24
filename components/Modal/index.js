import React from 'react';
import styled from 'reshadow';
import ReactModal from 'react-modal';

import styles from './style.css';

ReactModal.setAppElement('#__next');

const Modal = ({isOpen, onClose, children, closeLabel}) => styled(styles)(
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
