import React from "react";
import { FiSearch } from "react-icons/fi";
import { AiFillCaretDown } from "react-icons/ai";
import { TbWorld } from "react-icons/tb";
import { RiContactsLine } from "react-icons/ri";

import "./Style/CoverStyle.scss";

export function Cover() {
    return <main>
        <div className="left">
       {/* <img src=""/> */}
       <img src="https://m.media-amazon.com/images/G/01/digital/video/acquisition/web_footer_logo._CB462908456_.png"/>
       <ul>
        <li>Home</li>
        <li>Store</li>
        <li>Channels</li>
        <li>Categories <AiFillCaretDown/></li>
        <li>My Stuff</li>
       </ul>
       </div>
       <div className="right">
        <p>Browse <AiFillCaretDown/>  </p>
      <button className="cover_btn">Try for free</button>
        <ul>
        <li><FiSearch/></li>
        <li><TbWorld/> EN <AiFillCaretDown/></li>
        <li><RiContactsLine/> <AiFillCaretDown/></li>
       </ul>
       </div>
    </main>;
    }