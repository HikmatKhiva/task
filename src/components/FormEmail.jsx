import { useState } from "react";
import { Error, Success } from "../motion";
const REGEX_EMAIL =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const FormEmail = () => {
  const [validEmail, setValidEmail] = useState("");
  const [email, setEmail] = useState("");
  // typically i use tanstack query all off state already created this library but i didn't install this library because here haven't any fetch
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  // handle input change
  const handleChangeInput = (event) => setEmail(event.target.value);
  // handle submit form
  const handleSubmitForm = async (event) => {
    event.preventDefault();
    try {
      console.log(!REGEX_EMAIL.test(email));
      if (!email.length) return setValidEmail("Email is a required field");
      if (!REGEX_EMAIL.test(email)) {
        return setValidEmail("Please enter a valid email");
      }
      setLoading(true);
      setValidEmail("");
      await new Promise(() => {
        setTimeout(() => setLoading(false), 3000);
        setIsSuccess(true);
      });
    } catch (err) {
      setError(err);
    }
  };
  return (
    <form className=" max-w-[466px] pt-9" onSubmit={handleSubmitForm}>
      <div className="flex justify-between items-center form-bg p-[6px] rounded-3xl  overflow-hidden mb-3">
        <label htmlFor="email" className="flex flex-grow bg-transparent">
          <input
            type="text"
            id="email"
            autoComplete="email"
            readOnly={loading || isSuccess}
            value={email}
            onChange={handleChangeInput}
            name="email"
            className="bg-transparent pl-4 flex-grow outline-none form-text "
            placeholder="Your business email..."
          />
        </label>

        <button
          disabled={loading || isSuccess}
          type="submit"
          className={`flex font-intern px-2 py-2 justify-center rounded-full disabled:cursor-not-allowed font-bold text-white  ${
            isSuccess || error ? "" : "bg-primary-blue"
          } `}
        >
          {loading ? (
            <span className="w-7 h-7 animate-spin border-4 border-grey-200  rounded-full border-t-white"></span>
          ) : isSuccess && !loading ? (
            <Success />
          ) : error ? (
            <Error />
          ) : (
            <span className="px-5">Free trial</span>
          )}
        </button>
      </div>
      <span
        className={`font-intern inline-block origin-top transition-all duration-300 text-error font-medium pl-5 ${
          validEmail ? "scale-y-100" : "scale-y-0"
        }`}
      >
        {validEmail}
      </span>
    </form>
  );
};
export default FormEmail;
