import { React, useRef } from "react";
import Form from "react-bootstrap/Form";
import { verifyUser } from "../../data/users";

import "./Login.css";


function Login({ setToken , setRole}) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className='login-container'>
      <Form.Label htmlFor='username'><span className="bi-people-fill">&nbsp;&nbsp;Username</span></Form.Label>
      <Form.Control
        type='text'
        id='username'
        style={{ textAlign: "center" }}
        placeholder='user'
        ref={userRef}
      />
      <Form.Label className='mt-2' htmlFor='password'>
        <span className="bi-key-fill">&nbsp;&nbsp;Password</span>
      </Form.Label>
      <Form.Control
        type='password'
        id='password'
        style={{ textAlign: "center" }}
        placeholder='pass'
        ref={passRef}
      />
      <button
        className='btn btn-success mt-4'
        onClick={() => {
          const user = userRef.current.value;
          const pass = passRef.current.value;
          userRef.current.value = "";
          passRef.current.value = "";
          const userInfo = verifyUser(user, pass);
          if (userInfo == null) {
            // no authentication
            alert("Wrong username or password");
            userRef.current.focus();
          } else {
            // authenticated
            setToken(userInfo.token);
            setRole(userInfo.role);
          }
        }}
      >
        <span className='bi-box-arrow-in-right'>&nbsp;&nbsp;</span>Login
      </button>
    </div>
  );
}

export default Login;
