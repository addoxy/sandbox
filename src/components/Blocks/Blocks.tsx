export const PoweredBlock = () => {
  return (
    <div className="-mx-4 sm:-mx-20 xl:-mx-32">
      <div className="background-1 flex h-40 w-full items-center justify-center sm:h-70">
        <p className="flex h-20 w-80 items-center justify-center rounded-2xl bg-white text-2xl font-semibold text-neutral-700 shadow-md sm:h-30 sm:w-120 sm:text-4xl">
          Powered by <span className="text-gradient"> &nbsp;NextJS</span>
        </p>
      </div>
    </div>
  );
};

export const StartedBlock = () => {
  return (
    <div className="-mx-4 sm:-mx-20 xl:-mx-32">
      <div className="background-2 flex h-40 w-full flex-col items-center justify-center sm:h-70">
        <span className="mb-6 flex items-center justify-center text-2xl font-semibold text-white sm:mb-10 sm:text-4xl md:text-5xl">
          Excited? Get Started Today!
        </span>
        <button className="rounded-xl bg-white px-12 py-3 font-medium text-neutral-700 shadow-xl hover:text-blue-600 sm:px-20 sm:py-4 sm:text-lg">
          Get Started
        </button>
      </div>
    </div>
  );
};
