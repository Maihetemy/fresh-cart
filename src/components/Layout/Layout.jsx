import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
export default function Layout() {
  // const [counter, setCounter] = useState(0);
  // useEffect(() => {}, []);
  return (
    <>
      <Navbar />
      <div className="mt-20 mb-8 px-2 md:px-3 lg:px-5 mx-5 md:mx-7 lg:mx-10">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
}
