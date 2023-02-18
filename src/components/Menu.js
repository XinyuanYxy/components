import Link from "./Link";

export default function menubar() {
  const items = [
    { label: "Button", path: "/button" },
    { label: "Dropdown", path: "/dropdown" },
    { label: "Accordion", path: "/accordion" },
    { label: "Modal", path: "/modal" },
    { label: "Table", path: "/table" },
  ];
  return (
    <div className="sticky top-0 overflow-y-scroll flex flex-col h-screen items-start">
      {items.map((item) => {
        return (
          <Link
            key={item.label}
            to={item.path}
            className="m-1"
            activeClassName="font-bold border-l-2 border-blue-500 pl-2"
          >
            {item.label}
          </Link>
        );
      })}
    </div>
  );
}
