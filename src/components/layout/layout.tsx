import MainNavbar from "../navbar/navbar";
import Footer from "../footer/footer";

function Layout(props: any) {
  return (
    <div>
      <MainNavbar />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
export default Layout;
