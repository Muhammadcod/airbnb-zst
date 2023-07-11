import { useState } from "react";
import Like from "./svgs/like";
import Star from "./svgs/star";

const ListItem = ({ item, isLoading }) => {
  const { location, name, price, url, rating } = item;
  const [like, setLike] = useState(false);
  return (
    <>
      {isLoading ? (
        <p>loading..</p>
      ) : (
        <div className="relative">
          <Like
            fill={like ? "#FF385C" : "#222222"}
            className="absolute right-4 top-4 cursor-pointer text-red-800"
            onClick={() => setLike(!like)}
          />
          <div className="border border-gray-200 flex justify-center items-center h-[17.938rem] mb-1 rounded-xl">
            <img src={url} alt="ff" className="h-full w-full rounded-xl" />
          </div>
          <div className="flex justify-between">
            <span className="text-[15px] font-semibold text-[#222222]">
              {location?.city ?? "NA"}, {location?.country ?? "NA"}
            </span>
            <span className="text-[15px] font-normal flex items-center space-x-1">
              <Star fill="black" width={13} height={13} />
              <span>{rating}.0</span>
            </span>
          </div>
          <p className="text-[15px] text-[#818181]">
            Hosted by {[...name?.split(" ")][0]}
          </p>
          <p className="text-[15px] text-[#818181]">Aug 17 - 22</p>
          <p className="text-[15px]">
            <span className="font-semibold text-[#222222]">
              ${Math.ceil(price)}
            </span>{" "}
            <span className="font-light">night</span>
          </p>
        </div>
      )}
    </>
  );
};

export default ListItem;
