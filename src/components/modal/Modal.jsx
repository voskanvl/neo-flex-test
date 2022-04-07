import { useStore } from 'effector-react';
import React from 'react';
import { attention, basket } from '../../effector';
import style from './Modal.module.sass';
import { Card } from '../main/catalog/card/Card';

export const Modal = () => {
    const isModalShow = useStore(attention.$show);
    const message = useStore(attention.$attention);
    const product = useStore(attention.$removingProduct);

    const handleOk = () => {
        basket.removeProduct(product.id);
        attention.hide();
    };
    const handleCancel = () => {
        attention.hide();
    };
    return (
        <div
            className={style.modal}
            style={{ display: isModalShow ? '' : 'none' }}>
            <div className={style.modal__body}>
                <div className={style.modal__message}>{message}</div>
                <Card {...product} withDeal={false} />
                <div className={style.modal__contols}>
                    <button className={style.modal__button} onClick={handleOk}>
                        Ok
                    </button>
                    <button
                        className={style.modal__button}
                        onClick={handleCancel}>
                        Отмена
                    </button>
                </div>
            </div>
        </div>
    );
};
