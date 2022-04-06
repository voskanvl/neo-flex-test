import "./App.sass";
import { Header } from "./components/Header";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { data } from "./effector/";

function App() {
    data.getDataFx();
    return (
        <div className="App">
            <Header></Header>
            <Main></Main>
            <Footer></Footer>
        </div>
    );
}

export default App;
