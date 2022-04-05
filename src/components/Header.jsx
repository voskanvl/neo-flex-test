import { Logo } from "./Logo";
import { Likes } from "./Likes";
import { Basket } from "./Basket";
export const Header = () => {
    return (
        <header className="header">
            <Logo />
            <section className="marks">
                <Likes />
                <Basket />
            </section>
        </header>
    );
};
