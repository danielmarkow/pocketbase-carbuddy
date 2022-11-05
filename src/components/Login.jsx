import {useEffect, useRef, useState} from "react";

import {useForm} from "react-hook-form";
import {useLocation} from "wouter";
import {yupResolver} from "@hookform/resolvers/yup";
import * as yup from "yup";

import useAuth from "../hooks/useAuth.js";
import {useMutation} from "@tanstack/react-query";

const loginSchema = yup.object({
  emailInp: yup.string().email().required(),
  pwInp: yup.string().min(8).required(),
})

function Login() {
  const {pbClient, onLogin} = useAuth();
  const [location, setLocation] = useLocation();
  const {register, handleSubmit, formState: {errors}} = useForm({
    resolver: yupResolver(loginSchema)
  });

  const mutation = useMutation({
    mutationFn: data => {
      return onLogin(data.emailInp, data.pwInp)
    }
  });

  const onSubmit = (data) => {
    mutation.mutate(data);
  };

  return (
      <>
        {mutation.isLoading && (
            <p>logging in...</p>
        )}
        {mutation.isIdle && (
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
        )}
        {mutation.isSuccess && (
            <>
              <p>login successfully</p>
              <button onClick={() => setLocation("/")}>return home</button>
            </>

        )}
      </>
  );
}

export default Login;