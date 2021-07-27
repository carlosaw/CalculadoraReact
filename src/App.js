import './App.css';

import { StateProvider } from './contexts/StateContext';

import Calc from './components/Calc';
import History from './components/History';

const App = () => {
    
    return (
        <StateProvider>
            <div className="container">
                <Calc />
                <History />
            </div>
        </StateProvider>
    );
}

export default App;