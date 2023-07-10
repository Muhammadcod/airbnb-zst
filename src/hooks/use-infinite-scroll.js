import { useState, useEffect } from "react";

const useInfiniteScroll = (callback) => {
  const [isFetching, setIsFetching] = useState(false);
  function handleScroll() {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isFetching
    )
      return;
    setIsFetching(true);
  }

  useEffect(() => {
    if (!isFetching) return;
    callback(() => {
      console.log("called back");
    });
  }, [callback, isFetching]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return [isFetching, setIsFetching];
};

export default useInfiniteScroll;
