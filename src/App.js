import ButtonPage from "./pages/ButtonPage";
import AccordionPage from "./pages/AccordionPage";
import DropdownPage from "./pages/DropdownPage";
import Menu from "./components/Menu";
import Route from "./components/Route";
import TablePage from "./pages/TablePage";
import ModalPage from "./pages/ModalPage";

export default function App() {
  return (
    <div className="container max-auto grid grid-cols-6 gap-4 pt-2">
      <Menu />
      <div className="col-span-5">
        <Route path="/button">
          <ButtonPage />
        </Route>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
        <Route path="/modal">
          <ModalPage />
        </Route>
        <Route path="/table">
          <TablePage />
        </Route>
      </div>
    </div>
  );
}
