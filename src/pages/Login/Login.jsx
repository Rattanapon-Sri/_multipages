import { React, useRef } from "react";
import Form from "react-bootstrap/Form";
import { verifyUser } from "../../data/users";

import "./Login.css";


function Login({ setToken , setRole}) {
  const userRef = useRef();
  const passRef = useRef();

  return (
    <div className='login-container'>
      <Form.Label htmlFor='username'>Username</Form.Label>
      <Form.Control
        type='text'
        id='username'
        style={{ textAlign: "center" }}
        placeholder='admin'
        ref={userRef}
      />
      <Form.Label className='mt-2' htmlFor='password'>
        Password
      </Form.Label>
      <Form.Control
        type='password'
        id='password'
        style={{ textAlign: "center" }}
        placeholder='admin'
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
        Login
      </button>
    </div>
  );
}

export default Login;
