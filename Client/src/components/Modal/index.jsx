import React from 'react';
import {Modal as ModalComponent} from 'antd';
import {useModalContext} from '../../context/ModalContext';

const Modal = () => {
    const {
        modalState: {
            message,
            visible
        },
        closeModal
    } = useModalContext();

    return (

        <ModalComponent
            onCancel={closeModal}
            onOk={closeModal}
            visible={visible}
            cancelButtonProps={{
            style: {
                display: 'none'
            }
        }}
            okButtonProps={{
            style: {
                display: 'none'
            }
        }}>
            <h2>{message}</h2>
        </ModalComponent>
    );
};

export default Modal;