import { Link } from "react-router-dom";
import { useState } from "react";
import { List,X } from "@phosphor-icons/react";
export default function Header(){
    const [visible, setVisible]= useState(false);
    function share(){
        setVisible(!visible);
    }
    return(
        <div className="vin">
            <div className="header">
                <div className="text">
                <span className="pear"><Link to="/office">LOG</Link></span>
                <span className="orange"><Link to="/office">O</Link></span>  
                </div>
            <ul className={visible? "":"jan"}>
                <li><Link to="/office">Office Rates</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
            </ul>
            <div onClick={share} className="flex-con">{visible?<X size={30}/>:<List size={30}/>}</div>
            </div>
        </div>
    )
}