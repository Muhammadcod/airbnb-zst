import Placeholders from "./placeholders";

function Skeleton({ children, isFetching }) {
  return isFetching ? <Placeholders /> : <>{children}</>;
}

export default Skeleton;
