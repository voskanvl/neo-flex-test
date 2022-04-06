import style from "./Counter.module.sass";
export const Counter = ({ value, onChange }) => {
    return (
        <div className={style.counter}>
            <button
                className={style.counter__button}
                onClick={() => onChange("dec")}>
                <svg
                    width="36"
                    height="30"
                    viewBox="0 0 36 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse
                        cx="17.9945"
                        cy="15"
                        rx="17.5833"
                        ry="15"
                        fill="#FFCE7F"
                    />
                    <path d="M9.78888 14H26.2V16H9.78888V14Z" fill="white" />
                </svg>
            </button>
            <div className={style.counter__value}>{value}</div>
            <button
                className={style.counter__button}
                onClick={() => onChange("inc")}>
                <svg
                    width="36"
                    height="30"
                    viewBox="0 0 36 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <ellipse
                        cx="18.2559"
                        cy="15"
                        rx="17.5833"
                        ry="15"
                        fill="#FFCE7F"
                    />
                    <path
                        d="M17.0837 14V8H19.4282V14H26.4615V16H19.4282V22H17.0837V16H10.0504V14H17.0837Z"
                        fill="white"
                    />
                </svg>
            </button>
        </div>
    );
};
