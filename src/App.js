import axios from 'axios';
import "bootstrap/dist/css/bootstrap.css";
import React, {useState} from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginUser = async (e) => {
      await axios.post("https://requres.in/api/login", {
        email: email,
        password: password,
      });
      // e.preventDefault();
  }

  return (
    <div className="App">
      <h1>Log In!</h1>
      <form>
        <div>
          <div className="inputTitle">Email</div>
          <input
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
          onClick={() => loginUser()}
          disabled={!email || !password}
        >
          Log In
        </button>
      </form>
    </div>
  );
}

export default App;
