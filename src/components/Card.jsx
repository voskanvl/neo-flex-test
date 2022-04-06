import { basket } from "../effector";
export const Card = ({
    id,
    img,
    title,
    price,
    previousPrice,
    discount,
    rate,
}) => {
    return (
        <div className="card">
            <div className="card__img">
                <img src={img} alt={title} />
            </div>

            <div className="data card__data">
                <h2 className="data__title">{title}</h2>
                <div
                    className="data__pricing"
                    style={{ color: discount ? "red" : "" }}>
                    <div className="data__currentprice">
                        <div className="data__price">{price}&#8381;</div>
                        <div
                            className="data__discount"
                            style={{ display: discount ? "block" : "none" }}>
                            {discount}
                        </div>
                    </div>
                    <div
                        className="data__previousprice"
                        style={{ display: previousPrice ? "block" : "none" }}>
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
                <button
                    className="data__deal"
                    onClick={() => basket.addProductFx(id)}>
                    Купить
                </button>
            </div>
        </div>
    );
};
