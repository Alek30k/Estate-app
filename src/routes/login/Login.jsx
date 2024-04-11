import axios from "axios";
import "./login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Login() {
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    try {
      const res = await axios.post("http://localhost:8800/api/auth/register", {
        username,
        email,
        password,
      });

      navigate("/login");
    } catch (error) {
      console.log(error);
      setError(error.response.data.message);
    }
  };

  return (
    <div className="login">
      <div className="formContainer">
        <form onSubmit={handleSubmit}>
          <h1>Welcome back</h1>
          <input
            name="username"
            minLength={3}
            maxLength={20}
            type="text"
            placeholder="Username"
          />
          <input name="password" type="password" placeholder="Password" />
          <button>Login</button>
          {error && <span>{error}</span>}
          <Link to="/register">{"Don't"} you have an account?</Link>
        </form>
      </div>
      <div className="imgContainer">
        <img src="/bg.png" alt="" />
      </div>
    </div>
  );
}

export default Login;
