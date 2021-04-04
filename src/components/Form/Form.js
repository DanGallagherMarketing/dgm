import React, { useState } from "react";
import { useForm } from "react-hook-form";
import * as classes from "./Form.module.css";
import axios from "axios";
import ReactGA from "react-ga";

const Form = (props) => {
  const { register, handleSubmit, reset } = useForm();
  const [submitStatus, setSubmitStatus] = useState("unsubmitted");
  const [loading, setLoading] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const onSubmit = (data) => {
    console.log(data);
    setLoading(true);
    console.log("submitting...");
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": "contact",
        ...data,
      }),
    })
      .then(() => {
        setLoading(false);
        setSubmitStatus("success");
      })
      .catch((err) => setSubmitStatus("fail"));
  };

  let submitMsg;
  if (submitStatus === "unsubmitted") submitMsg = null;
  else if (submitStatus === "success")
    submitMsg = (
      <span className={classes.TwoCols}>Form submitted successfully</span>
    );
  else if (submitStatus === "fail")
    submitMsg = (
      <span className={classes.TwoCols}>
        Something went wrong. If the issue persists, please email us instead
      </span>
    );

  const serviceOptions = ["Landing Page Design", "Google Ads", "Facebook Ads"];

  return (
    <form
      name="contact"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className={classes.Form}
      onSubmit={handleSubmit(onSubmit)}
      // onClick={() => onSubmit()}
    >
      <input type="hidden" name="form-name" value="contact" />
      {/* register your input into the hook by invoking the "register" function */}
      {props.title ? <h2 className={classes.Title}>{props.title}</h2> : null}
      <div>
        <label className={classes.Required}>First Name:</label>
        <input
          className={classes.InputField}
          name="firstName"
          placeholder="First Name"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <label className={classes.Required}>Last Name:</label>
        <input
          className={classes.InputField}
          name="lastName"
          placeholder="Last Name"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <label className={classes.Required}>Email:</label>
        <input
          className={classes.InputField}
          name="email"
          id="email"
          type="email"
          placeholder="Email"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <label className={classes.Required}>Phone:</label>
        <input
          className={classes.InputField}
          name="phone"
          type="tel"
          placeholder="Phone"
          ref={register({ required: true })}
        />
      </div>
      <div className={classes.TwoCols}>
        <label>I Am Interested In:</label>
        {serviceOptions.map((value, i) => (
          <label style={{ display: "block" }} key={value}>
            <input
              style={{ marginRight: "5px" }}
              type="checkbox"
              value={value}
              name="interestedIn"
              ref={register}
            />
            {value}
          </label>
        ))}
      </div>

      {/* Message */}
      <div className={classes.TwoCols}>
        <label className={classes.Required}>Message:</label>
        <textarea ref={register} name="message" />
      </div>

      {/* errors will return when field validation fails  */}
      {/* {errors.firstName && <span>This field is required</span>} */}
      {loading ? (
        <div>loading...</div>
      ) : (
        <input className={classes.SubmitButton} type="submit" value="Submit" />
      )}
      {submitMsg}
    </form>
  );
};

export default Form;
