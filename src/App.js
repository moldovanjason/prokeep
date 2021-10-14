import axios from 'axios';
import React, {useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleButton = (e) => {
    axios.post("https://requres.in/api/register").then((response) => {
      console.log(response);
    }).catch((err) => {
      console.log(err);
    });
  };

  return (
    <div className="App">
      <h1>Log In!</h1>
      <form action="">
        <div>
          <div className="inputTitle">Email</div>
          <input
            // autoComplete="off"
            type="email"
            placeholder="Johndoe@gmail.com"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            minLength="6"
          />
        </div>
        <div>
          <div className="inputTitle">Password</div>
          <input
            type="password"
            placeholder="•••••••••••"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            minLength="6"
            maxLength="24"
          />
        </div>
        <button
          type="submit"
          onClick={() => handleButton()}
          disabled={!email || !password}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default App;
