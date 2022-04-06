import { Card } from "./Card";
import { useStore } from "effector-react";
import { data } from "../effector/";
import { Group } from "./Group";

export const Main = () => {
    const headphones = useStore(data.$data);
    return (
        <main className="main">
            <Group title={"наушники"}>
                {headphones
                    .filter(headphone => !headphone.wireless)
                    .map(headphone => (
                        <Card {...headphone} key={headphone.id} />
                    ))}
            </Group>
            <Group title={"Беспроводные наушники"}>
                {headphones
                    .filter(headphone => headphone.wireless)
                    .map(headphone => (
                        <Card {...headphone} key={headphone.id} />
                    ))}
            </Group>
        </main>
    );
};
