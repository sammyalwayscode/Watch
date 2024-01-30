import editor1 from "../../assets/editor1.png";
import editorHover1 from "../../assets/editorHover.png";

const editorsCollections = [
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
  {
    watchImg: editor1,
    watchImgHover: editorHover1,
    watchTitle: "Rose White Gold Leather",
    watchPrice: 165.99,
  },
];

const ProductCard = () => {
  return (
    <section className=" w-full flex flex-wrap justify-center">
      {editorsCollections?.map((props, i) => (
        <div
          key={i}
          className=" flex text-center flex-col items-center m-5 flex-wrap  lg:m-12 mobile:w-full"
        >
          <div className=" w-32 mb-3">
            <img className=" w-full" src={props.watchImg} alt="" />
          </div>
          <p className=" capitalize text-base font-bold">{props.watchTitle}</p>
          <p className=" text-gray-400">${props.watchPrice}</p>
        </div>
      ))}
    </section>
  );
};

export default ProductCard;
