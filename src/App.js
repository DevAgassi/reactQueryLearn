import './App.css';
import Users from './components/Users';
import { useState } from 'react';
import UserDetails from './components/UserDetails';
import {useCallback} from 'react';

function App() {
  const [userId, setUserId] = useState();

  const updateUserId = useCallback((id)=>setUserId(id))
  return (
    <div className="App">
      <div style={{padding: 20, width: '30%', borderRight: '1px solid white'}}>
         <Users setUserId={updateUserId} />
      </div>
      <div style={{padding: 20, width: '70%'}}><UserDetails userId = {userId} /></div>
    </div>
  );
}

export default App;
