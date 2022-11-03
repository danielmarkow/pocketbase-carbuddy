import {useForm} from "react-hook-form";
import {useLocation} from "wouter";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import useAuth from "../hooks/useAuth.js";

const loginSchema = yup.object({
  emailInp: yup.string().email().required(),
  pwInp: yup.string().min(8).required(),
})

function Login() {
  const {client, onLogin} = useAuth();
  const [location, setLocation] = useLocation();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema)
  });


  const onSubmit = (data) => {
    onLogin(data.emailInp, data.pwInp);
    setLocation("/");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="emailInp">Email: </label>
      <input
          id="emailInp"
          type="input"
          placeholder="name@domain.com"
          {...register("emailInp")}
      />
      {errors.emailInp?.message}
      <br />
      <label htmlFor="pwInp">Password: </label>
      <input
          id="pwInp"
          type="password"
          placeholder="Password"
          {...register("pwInp")}
      />
      {errors.pwInp?.message}
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default Login;