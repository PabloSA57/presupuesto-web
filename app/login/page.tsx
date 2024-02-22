import React from "react";
import { login, signup } from "./actions";
const Page = () => {
  return (
    <form className=" flex flex-col">
      <label htmlFor="email">Email:</label>
      <input id="email" name="email" type="email" required />
      <label htmlFor="full_name">FullName:</label>
      <input id="full_name" name="full_name" type="text" required />
      <label htmlFor="password">Password:</label>
      <input id="password" name="password" type="password" required />
      <button formAction={login} className=" p-2 bg-slate-500">
        Log in
      </button>
      <button formAction={signup} className=" p-2 bg-red-400">
        Sign up
      </button>
    </form>
  );
};

export default Page;
