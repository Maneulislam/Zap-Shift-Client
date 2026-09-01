
const Loader = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <div className="relative flex items-center justify-center">
        <div className="w-24 h-24 sm:w-32 sm:h-32 rounded-full border-4 border-slate-800 border-t-indigo-500 border-r-indigo-500 animate-spin" />
        <div className="absolute w-16 h-16 sm:w-20 sm:h-20 rounded-full border-4 border-slate-800 border-b-cyan-400 border-l-cyan-400 animate-[spin_1.5s_linear_infinite_reverse]" />

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-4 h-4 sm:w-5 sm:h-5 bg-indigo-500 rounded-full animate-ping opacity-75" />
          <div className="absolute w-3 h-3 sm:w-4 sm:h-4 bg-cyan-400 rounded-full shadow-lg shadow-cyan-500/50" />
        </div>
      </div>

      <div className="mt-8 flex flex-col items-center gap-2 text-center">
        <h2 className="text-black text-lg sm:text-xl font-semibold tracking-wider uppercase">
          Loading
          <span className="inline-flex ml-1">
            <span className="animate-[bounce_1s_infinite_100ms]">.</span>
            <span className="animate-[bounce_1s_infinite_200ms]">.</span>
            <span className="animate-[bounce_1s_infinite_300ms]">.</span>
          </span>
        </h2>

      </div>

      <div className="w-48 sm:w-64 h-1.5 bg-slate-800 rounded-full mt-6 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-indigo-500 to-cyan-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] w-full origin-left" />
      </div>
    </div>
  );
};

export default Loader;