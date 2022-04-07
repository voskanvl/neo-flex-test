import { basket } from '../effector';
import style from './Card.module.sass';
export const Card = ({
    id,
    img,
    webp,
    title,
    price,
    previousPrice,
    discount,
    rate,
    withDeal = true,
}) => {
    return (
        <div className={style.card}>
            <div className={style.card__img}>
                <picture>
                    <source type="image/webp" srcSet={webp} />
                    <source type="image/jpeg" srcSet={img} />
                    <img src={img} alt={title} />
                </picture>
            </div>

            <div className={style.data + ' ' + style.card__data}>
                <h2 className={style.data__title}>{title}</h2>
                <div
                    className={style.data__pricing}
                    style={{ color: discount ? 'red' : '' }}>
                    <div className={style.data__currentprice}>
                        <div className={style.data__price}>
                            {Number(price).toLocaleString('ru')}&#8381;
                        </div>
                        <div
                            className={style.data__discount}
                            style={{ display: discount ? 'block' : 'none' }}>
                            {discount}
                        </div>
                    </div>
                    <div
                        className={style.data__previousprice}
                        style={{ display: previousPrice ? 'block' : 'none' }}>
                        {Number(previousPrice).toLocaleString('ru')}&#8381;
                    </div>
                </div>
                <div className={style.data__rating}>
                    <svg
                        className={style.data__ratestar}
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
                    <div className={style.data__rate}>{rate}</div>
                </div>
                <button
                    className={style.data__deal}
                    onClick={() => basket.addProductFx(id)}
                    style={{ display: withDeal ? '' : 'none' }}>
                    Купить
                </button>
            </div>
        </div>
    );
};
