import { useStore } from 'effector-react';
import { basket } from '../../effector';
import { Catalog } from './catalog/Catalog';
import { BasketOffer } from './basketOffer/BasketOffer';
import style from './Main.module.sass';

export const Main = () => {
    const basketView = useStore(basket.$isVisible);
    return (
        <main
            className={style.main}
            style={{
                marginTop: basketView ? '0' : '',
                paddingTop: basketView ? '3rem' : '',
            }}>
            {basketView ? <BasketOffer /> : <Catalog />}
        </main>
    );
};
