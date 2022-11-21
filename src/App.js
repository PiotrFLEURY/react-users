import './App.css';
import { useEffect, useState } from 'react';
import User from './User';


function App() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  useEffect(() => {
    fetch('https://randomuser.me/api/?results=5')
      .then(res => res.json())
      .then(data => setUsers(data.results))
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Gonna call
          &nbsp;
          <a href="https://randomuser.me/" target="_blank" className="link">
            ramdomuser.me
          </a>
          &nbsp;
          API
        </p>
        <div className="content">
          <ul>
            {
              users.map(user =>
                <li key={user.login.uuid} className="user-card">
                  <img 
                    src={user.picture.medium} 
                    className="avatar" 
                    onClick={(e) => setSelectedUser(user)}
                    alt="user avatar"
                    />
                  <div className="user-name">
                    {user.name.title + " " + user.name.first + " " + user.name.last}
                  </div>
                  <div className="secondaryInfos">
                    {user.email + " " + user.phone}
                  </div>
                </li>
              )
            }
          </ul>
          <div className="selected-user">
            {
              selectedUser && <User user={selectedUser} />
            }
          </div>
        </div>
      </header>
    </div>
  );
}

export default App;
