import Header from "../components/Navbar/Navbar";
import Login from "../components/alogin";


const login = () => {
  return (
    <>
      <Header />
        <div className="max-w-7xl mx-auto pt-15 px-6 mt-64 mb-36">
        <Login Login={true}/>
      </div>
    </>
  );
};

export default login;