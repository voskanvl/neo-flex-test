import { useStore } from "effector-react";
import { basket } from "../../effector";
import { BasketCard } from "./BasketCard";
import style from "./BasketList.module.sass";
export const BasketList = () => {
    const basketArray = useStore(basket.$basket);
    return (
        <>
            <div className={style.basketList}>
                {basketArray.map(item => (
                    <BasketCard
                        {...item.product}
                        key={item.id}
                        volume={item.volume}
                    />
                ))}
            </div>
        </>
    );
};
