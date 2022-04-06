import { useStore } from "effector-react";
import { basket } from "../effector/";
import { Catalog } from "./Catalog";
import { BasketOffer } from "./basket/BasketOffer";

export const Main = () => {
    const basketView = useStore(basket.$isVisible);
    return (
        <main className="main">
            {basketView ? <BasketOffer /> : <Catalog />}
        </main>
    );
};
