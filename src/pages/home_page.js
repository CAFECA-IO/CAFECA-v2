import Mynavbar from "../components/navbar/mynavbar";
import BackGroundItems from "../components/animation/bg_color";
import Footer from "../components/footer/footer";

function HomePage() {
  return (
    <>
      <header>
        <Mynavbar />
      </header>
      <div>
        <BackGroundItems />
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
}
export default HomePage;
