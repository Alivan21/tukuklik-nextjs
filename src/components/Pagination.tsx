import Icon from "./Icon";

function Pagination() {
  return (
    <nav aria-label="navigation" className="mx-auto py-5">
      <ul className="inline-flex -space-x-px">
        <li>
          <button className="ml-0 rounded-l-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <Icon name="chevron-left" size={20} strokeWidth={2.5} />
          </button>
        </li>
        <li>
          <button className="border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            1
          </button>
        </li>
        <li>
          <button
            className="border border-gray-300 bg-white px-3 py-2 leading-tight text-red-500 hover:bg-red-100 hover:text-red-700"
            disabled
          >
            2
          </button>
        </li>
        <li>
          <button className="rounded-r-lg border border-gray-300 bg-white px-3 py-2 leading-tight text-gray-500 hover:bg-gray-100 hover:text-gray-700">
            <Icon name="chevron-right" size={20} strokeWidth={2.5} />
          </button>
        </li>
      </ul>
    </nav>
  );
}
export default Pagination;
