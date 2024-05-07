import HeroBannner from "./heroBanner/HeroBannner";
import Popular from "./popular/Popular";
import "./style.scss";
import TopRated from "./topRated/TopRated";
import Trending from "./trending/Trending";
function Home() {
  return (
    <div className="homePage">
      <HeroBannner />
      <Trending />
      <Popular />
      <TopRated />
    </div>
  );
}

export default Home;
