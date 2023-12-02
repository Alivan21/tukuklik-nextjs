function Breadcrumb() {
  return (
    <section className="max-w-7xl px-4 sm:px-6 lg:px-8">
      <div className="flex items-center space-x-2 text-sm text-gray-400">
        <a className="hover:text-gray-600 hover:underline" href="#">
          Home
        </a>
        <span>
          <svg
            className="h-5 w-5 leading-none text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
        <a className="hover:text-gray-600 hover:underline" href="#">
          Electronics
        </a>
        <span>
          <svg
            className="h-5 w-5 leading-none text-gray-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" />
          </svg>
        </span>
        <span>Phones</span>
      </div>
    </section>
  );
}
export default Breadcrumb;
