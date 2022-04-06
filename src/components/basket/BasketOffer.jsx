import { Group } from "../Group";
import style from "./BasketOffer.module.sass";
import { BasketList } from "./BasketList";
import { Total } from "./Total";

export const BasketOffer = () => {
    return (
        <Group title={"Корзина"}>
            <div className={style.basketOfferLayout}>
                <BasketList />
                <Total />
            </div>
        </Group>
    );
};
