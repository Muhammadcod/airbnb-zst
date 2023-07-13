import { useEffect, useState } from "react";
import { fetchData } from "../libs/apis";
import ListItem from "./list-item";
import PlaceholderCard from "./placeholder-card";

const Listings = () => {
  const [data, setData] = useState([]);
  const [pageNumber] = useState(1);
  const [pageLimit, setPageLimit] = useState(0);
  const [isFetching, setIsFetching] = useState(false);

  useEffect(() => {
    const fetchDataAsync = async () => {
      setPageLimit((prevState) => prevState + 12);
      setIsFetching(true);
      const { data } = await fetchData(`/listings`, { params: { pageNumber } });
      const { docs } = data;
      setData([...docs]);
      setIsFetching(false);
    };
    void fetchDataAsync();
  }, [pageNumber]);

  return (
    <section className="mx-6 md:mx-10 min-[1440px]:mx-20 pt-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 min-[1640px]:grid-cols-5 gap-6 ">
        {isFetching ? (
          <PlaceholderCard dataLimit={pageLimit} />
        ) : (
          <>
            {data.map((item, index) => (
              <ListItem key={index} item={item} isLoading={isFetching} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Listings;
