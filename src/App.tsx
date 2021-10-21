import { Provider } from 'react-redux';
import './App.css';
import ZengoHeader from './Pages/Header/ZengoHeader';
import StateRegistry from './Pages/StateRegistry/StateRegistry';
import { store } from './Redux/store';

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <ZengoHeader></ZengoHeader>
        <StateRegistry></StateRegistry>
      </Provider>
    </div>
  );
}

export default App;
