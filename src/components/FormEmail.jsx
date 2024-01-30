import { useState } from "react";
const FormEmail = () => {
  const [error, setError] = useState("");
  const [email, setEmail] = useState("");
  const handleSubmitForm = (event) => {
    event.preventDefault();
    try {
      if (!email.length) {
        return setError("Email is a required field");
      } else if (/^[\w.%+-]+@[\w.-]+\.[\w]{2,6}$/.test(email)) {
        setError("Please enter a valid email");
      } else {
      }
    } catch (error) {}
  };
  const handleChangeInput = (event) => setEmail(event.target.value);
  return (
    <form className=" max-w-[466px] pt-9" onSubmit={handleSubmitForm}>
      <div className="flex justify-between items-center form-bg p-[6px] rounded-3xl  overflow-hidden mb-3">
        <label htmlFor="email" className="flex flex-grow bg-transparent">
          <input
            type="text"
            id="email"
            value={email}
            onChange={handleChangeInput}
            name="email"
            className="bg-transparent pl-4 flex-grow outline-none form-text "
            placeholder="Your business email..."
          />
        </label>
        <button className="flex font-intern px-9 py-2 justify-center rounded-3xl font-bold text-white bg-primary-blue ">
          Free trial
        </button>
      </div>
      {/* {error && ( */}
      <span
        className={`font-intern inline-block origin-top transition-all duration-300 text-error font-medium pl-5 ${
          error ? "scale-y-100" : "scale-y-0"
        }`}
      >
        {/* {error ? error : "Email is a required field"} */}
        {error}
      </span>
      {/* )} */}
    </form>
  );
};
export default FormEmail;
