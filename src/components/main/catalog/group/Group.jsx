import style from "./Group.module.sass";
export const Group = ({ title, children }) => {
    return (
        <>
            <div className={style.title}>{title}</div>
            <div className={style.group}>{children}</div>
        </>
    );
};
