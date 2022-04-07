import './App.sass';
import { Header } from './components/header/Header';
import { Main } from './components/main/Main';
import { Footer } from './components/footer/Footer';
import { data } from './effector/';
import { Modal } from './components/modal/Modal';

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
