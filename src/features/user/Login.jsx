import { useFormik } from "formik";
import React from "react";
import { useLoginMutation } from "../../services/auth.service";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setUser } from "./loginslice";

function Login() {
  var [loginFn] = useLoginMutation();
  var navigate = useNavigate();
  var dispatch = useDispatch();
  var loginForm = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    onSubmit: (values) => {
      loginFn(values).then((res) => {
        window.localStorage.setItem("token", res.data.token);
        window.localStorage.setItem("role", res.data.role);
        dispatch(setUser(res.data));
        navigate("/dashboard");
      });
    },
  });
  return (
    <div>
      <form onSubmit={loginForm.handleSubmit}>
        <div class="form-group">
          <label for="UserName">UserName</label>
          <input
            type="text"
            class="form-control"
            id="UserName"
            {...loginForm.getFieldProps("username")}
          />
        </div>
        <div class="form-group">
          <label for="passWord">Password</label>
          <input
            type="password"
            class="form-control"
            id="passWord"
            {...loginForm.getFieldProps("password")}
          />
        </div>
        <button type="submit" class="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Login;
