import Accordion from "../components/Accordion";
export default function App() {
  const accordionItems = [
    {
      id: "fdsf3",
      lable: "How do we get there",
      content: "work hard and smart",
    },
    {
      id: "fdsfdsf",
      lable: "How do we get there2",
      content: "work hard and smart2",
    },
    {
      id: "fds34hgg",
      lable: "How do we get there3",
      content: "work hard and smart3",
    },
    {
      id: "fdfgg765",
      lable: "How do we get there4",
      content: "work hard and smart4",
    },
  ];
  return (
    <div>
      <Accordion items={accordionItems} />
    </div>
  );
}
