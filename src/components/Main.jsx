import { useStore } from "effector-react";
import { basket } from "../effector/";
import { Catalog } from "./Catalog";

export const Main = () => {
    const basketView = useStore(basket.$isVisible);
    return (
        <main className="main">{basketView ? <div></div> : <Catalog />}</main>
    );
};
