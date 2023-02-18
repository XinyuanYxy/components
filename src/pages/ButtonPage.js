import Button from "../components/Button";
import { GoCloudDownload, GoThumbsup } from "react-icons/go";

export default function ButtonPage() {
  return (
    <div>
      <div>
        <Button outline primary className="mb-2">
          <GoCloudDownload />
          click me
        </Button>
      </div>
      <div>
        <Button secondary className="mb-2">
          hey
        </Button>
      </div>
      <div>
        <Button success rounded className="mb-2">
          <GoThumbsup />
          hire me
        </Button>
      </div>
      <div>
        <Button primary outline>
          hire me
        </Button>
      </div>
    </div>
  );
}
