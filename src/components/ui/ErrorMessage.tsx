const ErrorMessage = ({ message }: { message: string | undefined}) => {
  return <p className="text-error leading-5 font-Inter font-medium -tracking-[%1] ml-6 mt-3">{message}</p>;
};
export default ErrorMessage;
