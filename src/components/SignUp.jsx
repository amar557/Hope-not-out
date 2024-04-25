function SignUp({ current, handleAuthenticationPages }) {
  return (
    <div
      className={` ${
        current === "signup" ? "-translate-x-0 z-50  " : "translate-x-full"
      }`}
    >
      sign up
      <button onClick={() => handleAuthenticationPages("login")}>
        go to login
      </button>
    </div>
  );
}

export default SignUp;
