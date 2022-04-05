import { Card } from "./Card";
import img from "../assets/Image-1.png";
export const Main = () => {
    return (
        <main className="main">
            <Card
                image={img}
                title={"GERLAX GH-04"}
                price={2567}
                previousPrice={3569}
                rate={4.7}
                discount={"-20%"}
            />
        </main>
    );
};
