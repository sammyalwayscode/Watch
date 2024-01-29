const newsData = [
  {
    newsDate: 24,
    newsMonth: "Nov",
    newsTitle: "Top colour pantone for fashion in 2016",
    category: "Fashion",
  },
  {
    newsDate: 28,
    newsMonth: "Nov",
    newsTitle: "Hipster - Fashion trend this summer",
    category: "Lifestyle",
  },
];

const NewsSuscribe = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" w-[92%] min-h-[520px] bg-[#F2F2F2] my-24 flex justify-center items-center">
        <main className=" px-3 py-5 flex flex-wrap justify-center">
          <section className=" mr-20 laptopSmall:mr-0 laptopSmall:mb-10 ">
            <h2
              style={{
                fontFamily: "Oswald",
              }}
              className=" tracking-[15px] text-3xl text-yellow-700 mb-16 laptopSmall:text-center mobile:text-2xl phone:text-xl phone:tracking-[10px]"
            >
              WATCH'S NEWS
            </h2>
            {newsData?.map((props, i) => {
              return (
                <main key={i} className=" flex my-7">
                  <div className=" mr-7">
                    <div className="  text-4xl text-yellow-700 laptopSmall:text-2xl laptopSmall:font-semibold">
                      {props.newsDate}
                    </div>
                    <div className=" text-xs -mt-[2px] laptopSmall:-mt-[4px]  ">
                      {props.newsMonth}
                    </div>
                  </div>
                  <div>
                    <div className=" font-bold text-lg mb-1 mobile:text-sm">
                      {props.newsTitle}
                    </div>
                    <div className=" text-xs text-[#AAAAAA]">
                      {" "}
                      <span> {props.category} </span> | <span>0 Likes</span> |{" "}
                      <span>0 Comments</span>{" "}
                    </div>
                  </div>
                </main>
              );
            })}
          </section>
          <section className=" w-[575px] ml-20 flex flex-col laptopSmall:items-center laptopSmall:ml-0 premobile:w-full">
            <h2
              style={{
                fontFamily: "Oswald",
              }}
              className=" text-left  tracking-[15px] text-3xl text-yellow-700 mb-16 laptopSmall:mb-7 mobile:text-2xl  phone:tracking-[10px] phone:text-xl"
            >
              GET 10% OFF
            </h2>
            <p className=" text-sm font-medium mb-12 laptopSmall:text-center laptopSmall:mb-7">
              Subscribe to the AB Casio Store mailing list to receive updates on
              new arrivals, special offers and other discount information.
            </p>

            <input
              type="text"
              placeholder="Email Address"
              className=" w-full h-12 rounded text-sm font-semibold pl-7 mb-10 laptopSmall:mb-5"
            />
            <button className=" w-44 h-12 bg-yellow-700 text-white font-bold rounded text-sm">
              SUBSCRIBE
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

export default NewsSuscribe;
