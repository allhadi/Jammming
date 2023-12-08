import './App.css';
import Header from './components/HeaderComponent/Header';
import SearchBar from './components/SearchBarComponent/SearchBar';
import BodyComponent from './components/BodyComponents/BodyComponent';

function App() {
  return (
    <div className="app">
        <Header/>
        <SearchBar/>
        <BodyComponent/>
    </div>
  );
}

export default App;
