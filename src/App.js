// packages
import logo from './logo.svg';

// styling
import './App.scss';

// components
import Header from './components/header/Header';
import Content from './components/content/Content';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
    </div>
  );
}

export default App;
