import editor1 from "../../assets/editor.jpg";

const EditorPick = () => {
  return (
    <div className=" w-full flex justify-center items-center">
      <div className=" flex flex-col items-center">
        <h2
          style={{
            fontFamily: "Oswald",
          }}
          className=" font-normal text-4xl uppercase tracking-[15px] mb-20"
        >
          Editors' Picks
        </h2>
        <div className="text-center">
          <div className=" w-64 mb-3">
            <img className=" w-full" src={editor1} alt="" />
          </div>
          <p className=" capitalize text-base font-bold">
            Rose White Gold Leather
          </p>
          <p className=" text-gray-400">$165.99</p>
        </div>
      </div>
    </div>
  );
};

export default EditorPick;
