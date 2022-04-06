import { memo } from "react";
import {
    incrementProductVolume,
    decrementProductVolume,
} from "../../effector/basket.effector";
import style from "./BasketCard.module.sass";
import { Counter } from "./Counter/Counter";

export const BasketCard = memo(
    ({ id, img, title, price, previousPrice, discount, rate, volume }) => {
        const handleChage = val => {
            const map = {
                inc: incrementProductVolume,
                dec: decrementProductVolume,
            };
            map[val](id);
        };
        return (
            <div className={style.basketCard}>
                <div className={style.basketCard__img}>
                    <img src={img} alt={title} />
                </div>
                <Counter value={volume} onChange={handleChage} />
                <div className="data card__data">
                    <h2 className="data__title">{title}</h2>
                    <div
                        className="data__pricing"
                        style={{ color: discount ? "red" : "" }}>
                        <div className="data__currentprice">
                            <div className="data__price">{price}&#8381;</div>
                            <div
                                className="data__discount"
                                style={{
                                    display: discount ? "block" : "none",
                                }}>
                                {discount}
                            </div>
                        </div>
                        <div
                            className="data__previousprice"
                            style={{
                                display: previousPrice ? "block" : "none",
                            }}>
                            {previousPrice}&#8381;
                        </div>
                    </div>
                    <div className="data__rating">
                        <svg
                            className="data__ratestar"
                            width="25"
                            height="23"
                            viewBox="0 0 25 23"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12.6268 17.6614L5.41618 22.0127L7.37647 13.892L0.960754 8.46201L9.38215 7.79538L12.6268 0.0867653L15.8715 7.79538L24.2941 8.46201L17.8771 13.892L19.8374 22.0127L12.6268 17.6614Z"
                                fill="#FFCE7F"
                            />
                        </svg>
                        <div className="data__rate">{rate}</div>
                    </div>
                </div>
            </div>
        );
    },
);
