import WatchComp1 from "../../assets/watch-logo1.jpg";
import WatchComp2 from "../../assets/watch-logo2.jpg";
import WatchComp3 from "../../assets/watch-logo3.jpg";
import WatchComp4 from "../../assets/watch-logo4.jpg";
import WatchComp5 from "../../assets/watch-logo5.jpg";

const compArray = [
  {
    compLogoImg: WatchComp1,
    watchCompDesc: "Jack Rollers",
  },
  {
    compLogoImg: WatchComp2,
    watchCompDesc: "Jack Rollers",
  },
  {
    compLogoImg: WatchComp3,
    watchCompDesc: "Jack Rollers",
  },
  {
    compLogoImg: WatchComp4,
    watchCompDesc: "Jack Rollers",
  },
  {
    compLogoImg: WatchComp5,
    watchCompDesc: "Jack Rollers",
  },
];

const Companies = () => {
  return (
    <div className=" w-full flex justify-center mb-32">
      <div className=" flex flex-wrap justify-center items-center">
        {compArray?.map((props, i) => (
          <div
            key={i}
            className=" lg:mx-20 m-10 tablet:w-20 tablet:m-5 mobile:w-12 mobile:m-2"
          >
            <img
              className=" "
              src={props.compLogoImg}
              alt={props.watchCompDesc}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Companies;
