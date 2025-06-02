import Header from "../components/header";
import Login from "../components/login";
import Navbar from "../components/Navbar/Navbar";


const login = () => {
  return (
    <>
      <Header />
        <div className="max-w-7xl mx-auto pt-15 px-6 mt-20 mb-40">
        <Login Login={true}/>
      </div>
    </>
  );
};

export default login;