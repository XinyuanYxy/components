import navigationContext from "../context/NavigationProvider";
import { useContext } from "react";

export default function useNavigation() {
  return useContext(navigationContext);
}
