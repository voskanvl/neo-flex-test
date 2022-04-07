import { Logo } from '../Logo';
import { Likes } from './Likes';
import { Basket } from './Basket';
import style from './Header.module.sass';
export const Header = () => {
    return (
        <header className={style.header}>
            <Logo />
            <section className={style.marks}>
                <Likes />
                <Basket />
            </section>
        </header>
    );
};
