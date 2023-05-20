import React, { useCallback } from "react";

import { useState, useEffect, useRef } from "react";
import Axios from "axios";
import { Input, TextField } from "@mui/material";
import { db } from "../config";
// import ReCAPTCHA from "react-google-recaptcha";
import { doc, setDoc } from "firebase/firestore";
export const Form = () => {
  const submit = async (e) => {
    e.preventDefault();
    const id=e.target[0].value+e.target[1].value

    // Add a new document in collection "cities"
    await setDoc(doc(db, "teams", id), {
      applicant_name: e.target[0].value,
      applicant_email:e.target[1].value,
      applicant_phone:e.target[2].value,
      applicant_address:e.target[3].value,
      institution_name:e.target[4].value,
      team_name:e.target[5].value,
      team_description:e.target[6].value,
      member1_name:e.target[7].value,
      member1_email:e.target[8].value,
      member1_phone:e.target[9].value,
      member1_github:e.target[10].value,
      member1_food:e.target[11].value,
      member1_tshirt:e.target[12].value,
      member2_name:e.target[13].value,
      member2_email:e.target[14].value,
      member2_phone:e.target[15].value,
      member2_github:e.target[16].value,
      member2_food:e.target[17].value,
      member2_tshirt:e.target[18].value,
      member3_name:e.target[19].value,
      member3_email:e.target[20].value,
      member3_phone:e.target[21].value,
      member3_github:e.target[22].value,
      member3_food:e.target[23].value,
      member3_tshirt:e.target[24].value,
      member4_name:e.target[25].value,
      member4_email:e.target[26].value,
      member4_phone:e.target[27].value,
      member4_github:e.target[28].value,
      member4_food:e.target[29].value,
      member4_tshirt:e.target[30].value,
      project_name:e.target[31].value,
      project_description:e.target[32].value,
      tech_stack:e.target[33].value,
      proposal_fire:e.target[34].value,




    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    const data = {
      Id: 16,
      Name: "ack Doe",
      Age: 97,
      "Created at": new Date(),
    };

    // Add one line to the sheet
    fetch(
      "https://sheet.best/api/sheets/802a7ace-8d3b-4de4-a311-61928b2bfc31",
      {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((r) => r.json())
      .then((data) => {
        // The response comes here
        console.log(data);
      })
      .catch((error) => {
        // Errors are reported there
        console.log(error);
      });
  };

  return (
    <div className="form flex flex-col pt-5  h-[100vh] w-full px-20 gap-10 ">
      <p className="header text-[44px] font-bold">
        Registration form for OSMHack2023
      </p>
      <p className="desc text-[24px] font-[500]">
        Please fill out the form below to participate in the OSMHack 2023. This
        form will collect essential information about you, your skills, and your
        project ideas. It will help us customize the hackathon experience to
        meet your needs. We appreciate your time and look forward to your active
        participation in this exciting event!
      </p>
      <form
        className="applicantInfo w-full justify-start items-start pb-[5rem]"
        onSubmit={submit}
      >
        <p className="title  text-[34px] py-5">Applicant Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start  py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            className="w-[45%]  max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="Address"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            label="College Name"
            variant="outlined"
            className="w-[91%] max-sm:w-[20rem]"
          />
        </div>
        <p className="title  text-[34px] py-5">Applicant Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start  py-5">
          <TextField
            id="outlined-basic"
            label="Team Name"
            variant="outlined"
            className="w-[75%] max-sm:w-[20rem] "
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Short description of your team"
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            required={true}
          />
        </div>
        <p className="title  text-[34px] py-5">Member 1:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
        </div>
        <p className="title  text-[34px] py-5">Member 2:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
        </div>
        <p className="title  text-[34px] py-5">Member 3:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
          />
        </div>
        <p className="title text-[34px] py-5">Member 4:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            className="w-[45%] max-sm:w-[20rem] "
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Email"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Phone Number"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Github Profile"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Veg or Non-veg"
            className="w-[45%] max-sm:w-[20rem]"
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="T-shirt size(S/M/L)"
            className="w-[45%] max-sm:w-[20rem]"
          />
        </div>
        <p className="title  text-[34px] py-5">Project Information:</p>
        <div className="inputs flex flex-wrap gap-[15px] items-start justify-start px-5 py-5">
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="Project Name"
            className="w-[45%] max-sm:w-[20rem]"
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="A short description of your project (minimum 50 words)..."
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            required={true}
          />
          <TextField
            id="outlined-basic"
            variant="outlined"
            label="A short description of your project (minimum 50 words)..."
            className="w-[75%]  max-sm:w-[20rem]"
            rows={10}
            multiline={true}
            required={true}
          />
          <div className="proposal flex flex-col justify-start items-start w-full gap-5">
            <p>
              Also drop a file explaining the projects in detail. Include
              following points:{" "}
            </p>
            <ul className="flex flex-col justify-start items-start">
              <li>Project name </li>
              <li> Project description</li>
              <li>The problem you will solve with this project </li>
              <li>Platforms or technologies to be used </li>
              <li>
                How would you use OpenStreetMap in this project [Most Important
              </li>
              <li>
                Some flowchart or architecture of your project(product)
                [Optional]
              </li>
              <li>Previous hackathon experience of any member [Optional]</li>
            </ul>
            <input type="file" name="proposal" id="" required={true} />

            <div className="flex flex-wrap gap-5 items-center">
              <input type="checkbox" name="" id="" required={true} clas />
              <p>
                I agree to the terms and conditions and will follow code of
                conduct.
              </p>
            </div>
          </div>
        </div>
        <p className="reset bg-blue-800 w-max text-white py-2 px-3 rounded-xl">
          Reset
        </p>
        <button
          className=" bg-btn w-max py-3 px-5 rounded-xl text-white text-2xl"
          onClick={submit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};
