import World from "./svgs/world";

const Footer = () => {
  return (
    <div className="fixed right-0 left-0 bottom-0 z-10 bg-white border w-full h-16 ">
      <div className="flex items-center justify-between mx-6 text-sm  h-full md:mx-10 min-[1440px]:mx-20">
        <div className="flex justify-between">
          <span className="mr-3">© 2023 Airbnb, Inc.</span>
          <div>
            <ol className="space-x-2 inline">
              <span>.</span>
              <li className="inline">Terms</li>
              <span>.</span>
              <li className="inline">Sitemap</li>
              <span>.</span>
              <li className="inline">Privacy</li>
              <span>.</span>
              <li className="inline">Your Privacy Choice</li>
              <span>.</span>
              <li className="inline">Destination</li>
            </ol>
          </div>
        </div>
        <div>
          <ol className="space-x-4 font-semibold flex">
            <li className="inline-flex items-center mb-0">
              <World clasName="mr-2" />
              <span className="ml-3">English (US)</span>
            </li>
            <li className="inline-flex">$ USD</li>
            <li className="inline-flex">Support & resources</li>
          </ol>
        </div>
      </div>
    </div>
  );
};

export default Footer;
