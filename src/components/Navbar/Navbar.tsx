import "./Navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <nav className="bg-gray-900 flex justify-between items-center">
        <div className="">
          <ul className="flex items-center gap-[2vw] mr-3">
            <li>
              <Link to={"/Home"} className="nav">
                Home
              </Link>
            </li>
            <li>
              <Link to="/Home" className="nav">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link to="/Home" className="nav">
                Contato
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav">
                Login
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav">
                Cadastro
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
