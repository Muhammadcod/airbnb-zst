import PlaceholderCard from "./placeholder-card";

function Skeleton({ children, isFetching }) {
  return isFetching ? <PlaceholderCard /> : <>{children}</>;
}

export default Skeleton;
