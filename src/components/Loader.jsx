import "../App.css";
function Loader() {
  return (
    <div class="relative flex w-full animate-pulse gap-2 p-4">
      <div class="h-72 w-3/5  bg-slate-400 rounded-lg"></div>
      <div class="flex-1">
        <div class="mb-2 h-10 w-3/5 rounded-lg bg-slate-400 text-lg"></div>
        <div class="h-12 w-2/5 mb-2 rounded-lg bg-slate-400 text-sm"></div>
        <div className="bg-slate-400 h-20 w-full  mb-1 rounded-lg"></div>
        <div className="flex items-center gap-2 justify-start mb-2">
          <div className="bg-slate-400 w-3/5 h-12  rounded-lg"></div>
          <div className="bg-slate-400 rounded-lg w-2/5 h-12 "></div>
        </div>
      </div>
      <div class="absolute bottom-5 right-[38%] h-6 w-6 rounded-full bg-slate-400"></div>
    </div>
  );
}

export default Loader;
