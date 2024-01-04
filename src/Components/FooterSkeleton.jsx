export function FooterSkeleton() {
  return (
    <footer className="bg-slate-900 h-full">
      <div className="px-10 lg:px-40 py-5 lg:py-20 text-gray-400 bg-black opacity-80">
        <div className="animate-pulse pb-5">
          <div className="h-4 w-1/4 bg-gray-700"></div>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 space-y-2 mb-5">
          {[...Array(18).keys()].map((index) => (
            <div key={index} className="animate-pulse hover:text-white transition-all">
              <div className="h-4 w-[150px] bg-gray-700"></div>
             
            </div>
          ))}
        </div>
        <div className="animate-pulse mt-10">
          <div className="h-6 w-[20%] bg-gray-700"></div>
        </div>
      </div>
    </footer>
  );
}
