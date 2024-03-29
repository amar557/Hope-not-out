function Button({ children }) {
  return (
    <button className="bg-black grow rounded-3xl text-white w-full uppercase font-semibold px-3 py-2">
      {children}
    </button>
  );
}

export default Button;
