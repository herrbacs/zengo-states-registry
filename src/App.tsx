import { Provider } from 'react-redux';
import './App.css';
import ZengoHeader from './Pages/Header/ZengoHeader';
import StateRegistry from './Pages/StateRegistry/StateRegistry';
import { store } from './Redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ZengoHeader></ZengoHeader>
        <StateRegistry></StateRegistry>
      </div>
    </Provider>
  );
}

export default App;
