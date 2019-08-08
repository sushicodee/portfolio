import React, { useState } from "react";
import "./Contact.scss";
import axios from "axios";
import Snackbar from "../snackbar/Snackbar";
const Contact = () => {
  const emailRegex = RegExp(
    /^(([^<>()\]\\.,;:\s@']+(\.[^<>()\]\\.,;:\s@']+)*)|('.+'))@(([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const [message, setMessage] = useState('');
  const [showSnack,setShowSnack] = useState(false)
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [body, setBody] = useState("");
  const [formErrors, setFormErrors] = useState({
    email: "",
    subject: "",
    body: ""
  });
  const [errorClassEmail, setErrorClassEmail] = useState("");
  const [errorClassSubject, setErrorClassSubject] = useState("");
  const formValid = () => {
    let valid = true;
    Object.values(formErrors).forEach(val => {
      val.length > 0 && (valid = false);
    });
    const allState = {email,subject,body}
    console.log(allState);
    Object.values(allState).forEach(val =>
      {val === '' && (valid = false)});
    console.log(valid, "Valid");
    return valid;
  };
  const handleChange = e => {
    e.preventDefault();
    let { name, value } = e.target;
    switch (name) {
      case "email":
        setEmail(value);
        setErrorClassEmail(
          (formErrors.email =
            emailRegex.test(value) && value.length > 0 ? "-false" : "-true")
        );
        setFormErrors(
          (formErrors.email =
            emailRegex.test(value) && value.length > 0
              ? ""
              : "Invalid Email Address")
        );
        break;
      case "subject":
        setSubject(value);
        setErrorClassSubject(
          (formErrors[name] =
            value.length > 3 && value.length < 50 ? "-false" : "-true")
        );
        formErrors[name] =
          value.length > 3 && value.length < 150
            ? ""
            : "Subject should be more than 3 characters and less than 150 characters";
        break;
      case "body":
        setBody(value);
        formErrors[name] =
          value.length > 3 && value.length < 999
            ? ""
            : "Body should be more than 3 characters and less than 999 characters";

        break;
      default:
        break;
    }
    setFormErrors(formErrors);
  };

  const handleSubmit = async e => {
    e.preventDefault();
    console.log(email, subject, body, formErrors);
    if (formValid()) {
      console.log(
        `submitting form SenderEmail:${email} Subject:${subject} Body: ${body}`
      );
      axios
        .post("/api/form", {
          email,
          subject,
          body
        })
        .then(res => {
          setMessage(res.data)
          setShowSnack(true);
          setTimeout(() => {
            setShowSnack(false);
        },4000)
        })
        .catch((err,res) => {
          if(err) {
            setMessage('500 server error');
          }
          else{
            setMessage(res.data)
          }
          setShowSnack(true);
          setTimeout(() => {
              setShowSnack(false);
          },4000)
        });
    }
    else{
      setMessage('please Fill the form correctly');
          setShowSnack(true);
          setTimeout(() => {
            setShowSnack(false);
        },4000)

    }
  };
  return (
    <div className="contact-container">
      {showSnack ?
      <Snackbar message = {message} show = {showSnack}/>:''}
      <div className="contact-title">
        <h2>Get In Touch</h2>
      </div>
      <div className="contact-body">
        <div>
          <h4>Reach me Out</h4>
        </div>
        <form
          className="email-container"
          id="email-form-id"
          onSubmit={handleSubmit}
          noValidate
        >
          <div>
            <label htmlFor="static-email">Through Email :</label>
            <div>
              <input
                className="static-email"
                type="text"
                value=" ssushant.sss@gmail.com"
                onChange={() => {}}
              />
            </div>
          </div>
          <div>
            <label htmlFor="email">
              Sender Email:<span className="required-star">*</span>
            </label>
            <div>
              <input
                className={`email email${errorClassEmail}`}
                name="email"
                type=" email"
                placeholder="Sender Email Address..."
                value={email}
                onChange={handleChange}
                autoComplete="off"
              />
              <span>
                {" "}
                {formErrors.email.length > 0 ? formErrors.email : ""}{" "}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="subject"> Subject:<span className="required-star">*</span></label>
            <div>
              <input
                className={`subject subject${errorClassSubject}`}
                name="subject"
                type="text"
                placeholder="Subject..."
                value={subject}
                onChange={handleChange}
                autoComplete="off"
              />
              <span>
                {" "}
                {formErrors.subject.length > 0 ? formErrors.subject : ""}{" "}
              </span>
            </div>
          </div>
          <div>
            <label htmlFor="body">
              Body:<span className="required-star">*</span>
            </label>
            <div>
              <textarea
                name="body"
                type="text"
                value={body}
                placeholder="Email Body..."
                onChange={handleChange}
              />
              <span> {formErrors.body.length > 0 ? formErrors.body : ""} </span>
            </div>
          </div>
          <div className="send-button">
            <button type="submit">Send Email</button>
          </div>
        </form>
      </div>
    </div>
  );
};
export default Contact;
