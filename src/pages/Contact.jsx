// 

import React from 'react'
import { useNavigate } from "react-router-dom";

const Contact = () => {
  function encode(data) {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  }
  let navigate = useNavigate();
  
  const handleSubmit = (event) => {
    event.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": event.target.getAttribute("name"),
        // eslint-disable-next-line no-restricted-globals
        ...name,
      }),
    })
      .then(() => navigate("/thank-you/"))
      .catch((error) => alert(error));
  };
  
  return (
    <div>
      <form name="contact" method="POST" data-netlify="true" onSubmit={handleSubmit}>
      <input type="hidden" name="form-name" value="contact" />

  <p>
    <label>Your Name: <input type="text" name="name" /></label>
  </p>
  <p>
    <label>Your Email: <input type="email" name="email" /></label>
  </p>
  <p>
   
  </p>
  <p>
    <label>Message: <textarea name="message"></textarea></label>
  </p>
  <p>
    <button type="submit">Send</button>
  </p>
</form>

    </div>
  )
}

export default Contact