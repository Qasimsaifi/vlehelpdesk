import Navbar from "@/components/Navbar";
import Image from "next/image";
import { CgClose, CgMenuLeft } from "react-icons/cg";

const TextAnimation = ({ text }) => {
  return <div className="container">{text}</div>;
};

export default function Home() {
  return (
    <main className="bg-gray-50 h-screen text-black">
      <Navbar />
      <div className="moveContainer">
        <span className="movingText move-left-to-right text-2xl ">
          Birth Certificate Price ₹99
        </span>
      </div>
      <div className="drawer">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content">{/* Page content here */}</div>
        <div className="drawer-side">
          <label htmlFor="my-drawer" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 h-full bg-base-200 text-base-content">
            <label htmlFor="my-drawer" className="text-4xl ml-56 cursor-pointer">
              <CgClose />
            </label>
            <h1 className="text-2xl">Services</h1>
            <li>
              <a href="/birthcertificate">Birth Certificate</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="text-center">
        <div className="w-full sm:w-10/12 md:w-9/12 lg:w-8/12 xl:w-7/12 mx-auto px-4 sm:max-w-lg md:max-w-xl lg:max-w-2xl xl:max-w-5xl">
          <h1 className="text-4xl font-bold mt-8">Welcome to VleHelpDesk</h1>
          <div className="mt-32">
            <h2 className="text-2xl font-bold">Contact Information</h2>
            <p className="text-lg">Email: vlehelpdeskbirth@gmail.com</p>
            <p className="text-lg">Phone: 6388710083</p>
          </div>
        </div>
      </div>
    </main>
  );
}
