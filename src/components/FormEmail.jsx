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
    <div className="">
      <div className="form-border p-px max-h-14 max-w-[466px] overflow-hidden">
        <form
          className="form-bg flex items-center justify-between max-h-[54px] overflow-hidden"
          onSubmit={handleSubmitForm}
        >
          <label htmlFor="email" className="flex flex-grow bg-transparent">
            <input
              className="outline-none form-text flex flex-1 text-[15px] bg-transparent pl-[23px] py-[18px] font-light leading-5 -tracking-[.01em]"
              placeholder="Your business email..."
              type="email"
              name="email"
              id="email"
              autoComplete="email"
              readOnly={loading || isSuccess}
              value={email}
              onChange={handleChangeInput}
            />
          </label>
          <div className="py-1.5 pe-1 overflow-hidden rounded-large min-w-[147px]">
            <button
              className={`flex items-center text-white rounded-[40px] justify-center leading-4 text-base font-semibold px-9 md:px-4 whitespace-nowrap duration-200 transition-colors h-11 bg-primary-blue border border-transparent hover:bg-secondary-blue  w-full ${
                isSuccess || error ? "" : "bg-primary-blue"
              }`}
              type="submit"
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
        </form>
      </div>
      <p
        className={`font-intern  origin-top transition-all duration-300 text-error font-medium pl-5 ${
          validEmail ? "scale-y-100" : "scale-y-0"
        }`}
      >
        {validEmail}
      </p>
    </div>
  );
};
export default FormEmail;
