import Header from "../Component/Header"
import Footer from "../Component/Footer";
import { Fire,InstagramLogo,LinkedinLogo,FacebookLogo, TwitterLogo} from "@phosphor-icons/react";
import yop from "../../src/Images/yop.jpg"
import fix from "../../src/Images/fix.jpeg"
import zion from "../../src/Images/zion.jpg"
import peter from "../../src/Images/peter.png"
import vux from "../../src/Images/vux.png"
import { Link } from "react-router-dom";
import { useState } from "react";

const About=()=>{
    function Back(){
        setClick(true);
        window.scrollTo({top:0, behavior:"smooth"})
    }
    return(
        <div className="vin">
            <div>
                <Header/>
            </div>
            <div id="foe">
            <div className="framer"></div> 
            </div>
            <div className="kill">
                <h2>Our Story</h2>
                <p>We are your Lauchpad to success</p>
            </div>
            
            <div className="fuel">
                <div className="jone">

                </div>
                <div className="car">
                <Fire size={32}/>
                <p>A creative space fuels inspiration, where ideas flow like rivers and innovation takes flight. In this haven, dreams are nurtured, and the extraordinary becomes achievable.</p>
                <span>- Jane Doe</span>
                </div>
            </div>
            <section className="spec pa-d canva">
            <img src={yop} alt="" id="fin"/>
        <div className="bin clap">
            <h2>Our Goal</h2>
            <p>EightsSpace is committed to fostering an environment of innovation, collaboration, and growth. Our mission is to provide a dynamic and inspiring space where individuals and teams can thrive, create, and achieve their goals by offering facilities, meaningful connections, and resources that empower them to turn their ideas into reality.</p>
        </div>
    </section>
    <section className="spec canva">
        <img src={zion} alt="" id="fin"/>
        <div className="bin clap">
            <h2>Our Vision</h2>
            <p>Our vision is to be the premier destination for professionals seeking a transformative workspace experience. We envision a community that transcends traditional office spaces, where creativity knows no bounds and innovation is nurtured.</p>
            <button><Link to="/contact">Contact Us</Link></button>
        </div>
    </section>
    <div className="jerrad pa-d">
    <div className="hox">
        <h2>Meet our Members</h2>
        <p>Every member of us is talented and full of vitality.</p>
     </div>
        <div className="flex-con">
            <div className="climax">
            <div className="im-a">
                <img src={peter} alt="" />
            </div>
            <div className="pi-x">
                <h3>Abas Eton</h3>
                <p>Product Designer / CEO</p>
            </div>
            <div className="ike">
            <div className="face">
            <Link><FacebookLogo size={25}/></Link>
            </div>
            <div className="face">
            <Link><InstagramLogo size={25}/></Link>
            </div>
            <div className="face">
            <Link><LinkedinLogo size={25}/></Link>
            </div>
            <div className="face">
            <Link><TwitterLogo size={25}/></Link>
            </div>
            </div>
          </div>
            <div className="climax">
            <div className="im-a">
                <img src={vux} alt="" />
            </div>
            <div className="pi-x">
                <h3>Stanley Muoghalu</h3>
                <p>Brand Designer / Eightspace Manager</p>
            </div>
            <div className="ike">
            <div className="face">
            <Link><FacebookLogo size={25}/></Link>
            </div>
            <div className="face">
            <Link><InstagramLogo size={25}/></Link>
            </div>
            <div className="face">
            <Link><LinkedinLogo size={25}/></Link>
            </div>
            <div className="face">
            <Link><TwitterLogo size={25}/></Link>
            </div>
            </div>
        </div>
      </div>
    </div>
    <section id="fox" className="pa-d">
        <div className="valve">
            <div className="gex">
            <h4>Subscribe to our newsletter</h4>
            <p>join a group of like-minded nomads. be the first to get updates on our offers, new deals and discounts for every plan.</p>
             </div>
            <div className="input zax">
                <input type="text" placeholder="youremail@example.com"/>
                <button>Subscribe</button>
            </div>
        </div>
    </section>
    <div id="vivo">
        <img src={fix} alt="" />
    </div>
    <Footer/>
</div>
    )
}
export default About