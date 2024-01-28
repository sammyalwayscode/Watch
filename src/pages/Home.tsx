import {
  Companies,
  EditorPick,
  HeroPage,
  NewsSuscribe,
  Products,
  WhyChooseUS,
} from "../components/Home";

const Home = () => {
  return (
    <div>
      <HeroPage />
      <Companies />
      <EditorPick />
      <WhyChooseUS />
      <Products />
      {/* <NewsSuscribe /> */}
    </div>
  );
};

export default Home;
