function ForgetPass({ current }) {
  return (
    <div
      className={` ${
        current === "forgotpassword"
          ? "  -translate-x-0 z-50"
          : "translate-x-full"
      }`}
    >
      forgot
    </div>
  );
}

export default ForgetPass;
