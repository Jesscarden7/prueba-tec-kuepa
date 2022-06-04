import './assets/css/app.css';
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Main from './components/Main/Main';
import RightPanel from './components/RightPanel/RightPanel';

function App() {
  return (
    <div className="container">
      <LeftMenu/>
      <Main/>
      <RightPanel/>
    </div>
  );
}

export default App;
