import Link from "next/link";

function CategoryCard() {
  const Categories = [
    {
      name: "PC",
      url: "/shop",
    },
    {
      name: "Smartphones",
      url: "/shop",
    },
    {
      name: "Laptops",
      url: "/shop",
    },
    {
      name: "Tablets",
      url: "/shop",
    },
    {
      name: "Accessories",
      url: "/shop",
    },
  ];

  return (
    <div className="rounded-sm bg-gray-100 px-4 py-5">
      <h2 className="text-lg font-medium">Category</h2>
      <ul className="mt-4 flex flex-col gap-2">
        {Categories.map((item, index) => {
          return (
            <li key={index}>
              <Link
                className="text-sm text-gray-800 transition delay-100 duration-200 hover:text-red-500"
                href={item.url}
              >
                {item.name}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
export default CategoryCard;
