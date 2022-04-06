import "./App.sass";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { attention, data } from "./effector/";
import { Modal } from "./components/Modal";

function App() {
    data.getDataFx();
    return (
        <div className="App">
            <Header />
            <Main />
            <Footer />
            <Modal />
        </div>
    );
}

export default App;
