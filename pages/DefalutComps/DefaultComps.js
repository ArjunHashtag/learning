import Navbar from "./Navbar/Navbar";

const DefaultComps = ({ children }) => {
  return (
    <div>
      <Navbar></Navbar>
      {children}
    </div>
  );
};

export default DefaultComps;
