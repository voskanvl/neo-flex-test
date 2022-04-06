import { useMemo } from "react";
import { useStore } from "effector-react";
import style from "./Total.module.sass";
import { basket } from "../../effector";
export const Total = () => {
    const basketArray = useStore(basket.$basket);
    const total = useMemo(
        () =>
            basketArray.reduce(
                (acc, product) => acc + product.product.price * product.volume,
                0,
            ),
        [basketArray],
    );
    return (
        <div className={style.total}>
            <div className={style.total__body}>
                <span>ИТОГО</span>
                <div className={style.total__overall}>
                    &#8381; {Number(total).toLocaleString("ru")}
                </div>
            </div>
            <button className={style.total__execute}>
                Перейти к оформлению
            </button>
        </div>
    );
};
