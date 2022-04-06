import { Card } from "./Card";
import img from "../assets/Image-1.png";
import { useStore } from "effector-react";
import { data } from "../effector/";

export const Main = () => {
    const headphones = useStore(data.$data);
    return (
        <main className="main">
            {headphones.map(headphone => (
                <Card {...headphone} key={headphone.id} />
            ))}
        </main>
    );
};
