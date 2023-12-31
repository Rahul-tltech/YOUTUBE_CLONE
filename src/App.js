
import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import Header from './components/Header';
import MainContainer from './components/MainContainer';
import SideBar from './components/SideBar';
import store from './utils/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      
      <Header/>
      <Body/>
      </div>
      </Provider>
      
   
  );
}

export default App;
