import { Link } from "react-router-dom";
import { useState } from "react";
import { ArrowUpRight,ArrowRight,ArrowUp, Copyright} from "@phosphor-icons/react";
export default function Footer(){
   const [hover,setHover]=useState(false);
   const [torch,setTorch]=useState(false);
   const [hold,setHold]=useState(false);
   const [move,setMove]=useState(false);
   const [click,setClick]=useState(false);
   function Back(){
       setClick(true);
       window.scrollTo({top:0, behavior:"smooth"})
   }
   function dove(){
    setHover(!hover);
   }
   function vas(){
    setTorch(!torch);
   }
   function fun(){
    setHold(!hold);
   }
   function daff(){
    setMove(!move);
   }
    return(
        <div className="vin">
            <div className="background">
              <div className="foot">
                <h1>CONTACT</h1>
                <p>Ready to join like-minded nomads and working professionals to achieve your goals?</p>
             </div>
             <div className="legal">
             <h2>JOIN THE LEGACY</h2>
             </div>
             <div id="fax">
               <div className="semi-con">
                <div className="comun">
                    <span>Eightspace</span>
                    <span>No 3. Oku street</span>
                    <span>Uyo.</span>
                    <span>Akwa Ibom state</span>
                    <span>09033532945</span>
                    <span>08045372869</span>
                    <div className="navigate">
                        <Link>Navigate</Link>
                        <div onMouseOut={dove}>{hover?<ArrowRight size={22}/>:<ArrowUpRight size={22}/>}</div>
                    </div>
                </div>
                <div className="horizon">
                    <hr />
                </div>
                <div className="comun">
                <div className="navigate bele">
                        <Link>Facebook</Link>
                        <div onMouseOut={vas}>{torch?<ArrowRight size={22}/>:<ArrowUpRight size={22}/>}</div>
                    </div>
                    <div className="navigate bele">
                        <Link>Instagram</Link>
                        <div onMouseOut={fun}>{hold?<ArrowRight size={22}/>:<ArrowUpRight size={22}/>}</div>
                    </div>
                    <div className="navigate bele">
                        <Link>Twitter</Link>
                        <div onMouseOut={daff}>{move?<ArrowRight size={22}/>:<ArrowUpRight size={22}/>}</div>
                    </div>  
                </div>
               </div>
             </div>
             <div id="dull">
                <ul>
                    <li><Link to="#" onClick={Back}>Back to top</Link></li>
                    <ArrowUp size={18} onClick={Back}/>
                </ul>
                <div className="cup">
                <span>Copyright</span>
                <Copyright size={14}/>
                <span>2024 Eightspace</span>
                </div>
             </div>
             <div className="text read">
                <span className="pear"><Link to="/home">LOG</Link></span>
                <span className="orange"><Link to="/home">O</Link></span>  
                </div>
         </div>
    </div>
    )
}