import { Link } from "react-router-dom";

import { BiCaretLeft } from "react-icons/bi";
import { RiSettings4Fill } from 'react-icons/ri';
import { IoMdMic } from 'react-icons/io';

function Header() {
  return(
    <header className="header">
      <link to="/">
        <BiCaretLeft className="nav" />
      </link>

      <div className="menu">
        <RiSettings4Fill className="setting" />
        <IoMdMic className="mic" />
      </div>

    </header>
  );
}

export default Header;