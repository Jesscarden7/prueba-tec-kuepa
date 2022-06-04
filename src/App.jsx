import './assets/css/app.css';
import { useEffect, useState } from 'react';
import LeftMenu from "./components/LeftMenu/LeftMenu";
import Main from './components/Main/Main';
import RightPanel from './components/RightPanel/RightPanel';

function App() {

  const [user, setUser] =  useState(null);

  useEffect(() => {
    fetch("https://api.opendota.com/api/players/6199147")
    .then(res => res.json())
    .then(data => setUser(data))
    .catch(err => {console.error(err)})
  }, []);

  return (
    <div className="container">
       { !user ?
        <div> Loading </div> : 
        <>
          <LeftMenu avatarUrl = {user.profile.avatar} />
          <Main user = {user} />
          <RightPanel/>
        </>
      }
    </div>
  );
}

export default App;
