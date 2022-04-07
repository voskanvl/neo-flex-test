import style from './BasketOffer.module.sass';
import { BasketList } from './BasketList';
import { Total } from './Total';

export const BasketOffer = () => {
    return (
        <>
            <div className={style.basketOfferLayout__title}>Корзина</div>
            <div className={style.basketOfferLayout}>
                <BasketList />
                <Total />
            </div>
        </>
    );
};
