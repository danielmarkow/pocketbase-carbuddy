import {useForm} from "react-hook-form";
import { useNavigate } from "react-router-dom";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import useAuth from "../hooks/useAuth.js";

const loginSchema = yup.object({
  emailInp: yup.string().email().required(),
  pwInp: yup.string().min(8).required(),
})

function Login() {
  const {pbClient, onLogin} = useAuth();
  const navigate = useNavigate();
  
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema)
  });


  const onSubmit = (data) => {
    onLogin(data.emailInp, data.pwInp);
    navigate("/");
  };

  pbClient.authStore.model

  return (
      <>
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
        {JSON.stringify(pbClient.authStore.model)}
      </>
  );
}

export default Login;