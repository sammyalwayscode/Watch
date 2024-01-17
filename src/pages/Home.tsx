import {
  Companies,
  EditorPick,
  HeroPage,
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
    </div>
  );
};

export default Home;
