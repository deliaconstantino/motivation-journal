"use client";
// import useSWR from "swr";
// import {useState}
// import { Form } from "./components/Form/Form";

export default function Home() {
  // const token = localStorage.getItem("token");
  // console.log("token", token);
  // const fetcher = async (url, token) => {
  //   console.log("in fetch token", token)
  //   try {
  //     fetch(`${url}${token}`)
  //     .then((res) => res.json())
  //     .then(json => console.log("json", json))
  //   } catch (err) {
  //     console.error("Site not added by user", err);
  //   }
  // };

  // const { data, error } = useSWR(token ? ["http://localhost:3001/api/v1/profile/?access_token=", token] : null, fetcher)

  return (
    <>
      {/* if (data) {
        // Handle `data` when it's set
    } */}

      <h1>Notes</h1>
      {/* <Notes /> */}
    </>
  );
}
