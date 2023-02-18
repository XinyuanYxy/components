import useNavigation from "../hooks/use-navigation";
export default function Route({ children, path }) {
  const { currentPath } = useNavigation();
  if (path === currentPath) return children;
  return null;
}
