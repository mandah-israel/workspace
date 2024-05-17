import Header from "../Component/Header";
import Footer from "../Component/Footer";
import { Link } from "react-router-dom";
import { Check,Users,CheckCircle } from "@phosphor-icons/react";
import toy from "../../src/Images/toy.jpg"
import girl from "../../src/Images/girl.jpg"
import man from "../../src/Images/man.jpg"
import vin from "../../src/Images/vin.jpg"
import dam from "../../src/Images/dam.jpg"
import zion from "../../src/Images/zion.jpg"
import pin from "../../src/Images/pin.png"
import house from "../../src/Images/house.jpg"
import dove from "../../src/Images/dove.jpg"
import fix from "../../src/Images/fix.jpeg"
import value from "../../src/Images/value.jpg"
import { Alarm,CirclesThree } from "@phosphor-icons/react";
import { useState } from "react";


const Office=()=>{
    
    const [show, setShow]=useState(true);
    const [click,setClick]=useState(false);
    const [scroll, setScroll]=useState(false);
    function Back(){
        setClick(true);
        window.scrollTo({top:0, behavior:"smooth"})
    }
function press(){
    setShow(!show);
}
function scrollToSection(){
   const far=document.querySelector(".pell");
   if (far){
    far.scrollIntoView({behavior: "smooth"});
   }
    }
    return(
  <div className="vin">
    <div>
        <Header/>
    </div>
    <section id="dam">
        <div className="gull">
            <h2>Your Launchpad to Sucess!</h2>
            <p>Together we can create better work</p>
            <div className="img">
                <img src={toy} alt="" />
                <img src={vin} alt="" className="hull" />
                <img src={girl} alt="" className="hull"/>
                <img src={man} alt="" className="hull"/>
                <span><Link onClick={scrollToSection}>+50 positive reviews</Link></span>
            </div>
        </div>
        <img src={dam} alt="" className="fin"/>
    </section>
    <section className="spec">
        <img src={zion} alt="" id="fin"/>
        <div className="bin">
            <p>Launchpad</p>
            <div className="img come">
                <img src={toy} alt="" />
                <img src={vin} alt="" className="hull" />
                <img src={girl} alt="" className="hull"/>
                <img src={man} alt="" className="hull"/>
                <span><Link onClick={scrollToSection}>+50 positive reviews</Link></span>
            </div>
            <h2>Remote work made easy with better tools.</h2>
            <h4>Comfortable space for enterpreneurs freelancers with a supportive atmosphere near your home</h4>
            <div className="has">
                <div className="bull">
                    <Check size={20}/>
                    <span>Steady power supply</span>
                </div>
                <div className="bull">
                <Check size={20}/>  
                <span>Simple and secure access</span>
                </div>
                <div className="bull">
                <Check size={20}/>  
                <span>Free wifi</span>   
                </div>
            </div>
        </div>
    </section>
    <div id="house" className="pa-d">
       <h2>Our Gallery</h2>
       <div className="div">
        <p>Have a feel of what our space looks like.</p>
        <button>Workspace</button>
       </div>
       <div className="vex">
       <img src={pin} alt="" />
       <button>Workspace</button>
       </div>
    </div>
    <div className="vite">
        <img src={house} alt="" />
        <img src={dove} alt="" />
        <img src={dam} alt="" />
       </div>
       <div className="vot">
          <div className="alarm">
            <CirclesThree size={30}/>
            <div className="vet">
            <h4>Co-working spaces</h4>
            <p>10hrs access to co-working space with strong Wifi.</p>  
            </div>
          </div>
          <div className="alarm">
            <Users size={30}/>
            <div className="vet">
            <h4>Community</h4>
            <p>Like-minded nomads working and changing the world.</p>  
            </div>
          </div>
          <div className="alarm">
            <Alarm size={30}/>
            <div className="vet">
            <h4>Immediate Accessibility</h4>
            <p>Make memories with inclusive local experiences.</p>  
            </div>
          </div>
       </div>
       <div className="price">
        <h2>Our Prices</h2>
        <div className="but">
            <div onClick={press} className="press">{show? "Internet" : "Internet"}</div>
            <div onClick={press} className="press">{show? "NoInternet" : "NoInternet"}</div>
        </div>
       </div>
       <div className="con">
        <div className="daily">
            <p>Daily</p>
            <div className="naira">{show? "NGN3000" : "NGN2000"}</div>
            <div className="icon">
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>10 Hours Secure Access</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Steady Power Supply</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25} className={show? "" : "hide"}/>
                   <span className={show? "" : "hide"}>Fast Internet</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Free snacks</span>
                </div>
            </div>
        </div>
        <div className="daily">
            <p>Weekly</p>
            <div className="naira">{show? "NGN1600" : "NGN10000"}</div>
            <div className="icon">
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>10 Hours Secure Access</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Steady Power Supply</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25} className={show? "" : "hide"}/>
                   <span className={show? "" : "hide"}>Fast Internet</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Free snacks</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Technical Support</span>
                </div>
            </div>
        </div>
        <div className="daily">
            <p>Monthly</p>
            <div className="naira">{show? "NGN50000" : "NGN35000"}</div>
            <div className="icon">
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>10 Hours Secure Access</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Steady Power Supply</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}className={show? "" : "hide"}/>
                   <span className={show? "" : "hide"}>Fast Internet</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Free snacks</span>
                </div>
                <div className="vow">
                   <CheckCircle size={25}/>
                   <span>Technical Support</span>
                </div>
            </div>
        </div>
       </div>
       <section className="spec spoil">
        <img src={value} alt="" id="fin"/>
        <div className="bin collot">
            <h2>Bring a Friend and get a discount</h2>
            <p>You can get a discount when you bring a friend to use our space.</p>
            <button><Link to="/contact">Contact Us</Link></button>
        </div>
    </section>
    <section id="vull" className="pa-d">
        <div className={scroll?"":"pell"} >
            <p>Reviews</p>
            <h2>Read Real Customer Reviews</h2>
            <h4>Honest Feedback from Satisfied Users</h4>
        </div>
        <div className="vince">
            <div className="mose slap">
                <h5>Excellent Space</h5>
                <span>Thank you very much for the comfortable workspace. I never suffered a back or body pain all through my visits.</span>
                <div className="fish">
                    <img src={toy} alt="" />
                    <div className="pull">
                    <p>Moses Charles</p>
                    <p>Web Developer</p>
                    </div>
                </div>
            </div>
            <div className="mose oat full">
                <h5>Great Value!</h5>
                <span>I was pleasantly surprised by the affordability of this workspace. You get so much for your money, from the modern design to the helpful staff. Great value for entrepreneurs!.</span>
                <div className="fish">
                    <img src={vin} alt="" />
                    <div className="pull">
                    <p>Kufre Ernest</p>
                    <p>Digital Marketer</p>
                    </div>
                </div>
            </div>
            <div className="mose oat kachi">
                <h5>Productivity Boost!</h5>
                <span>Working here has signifinantly increased my productivity. The quiet, professional atmosphere is perfect for getting things done. I love it here!</span>
                <div className="fish">
                    <img src={toy} alt="" />
                    <div className="pull">
                    <p>Francis Bright</p>
                    <p>Web Developer</p>
                    </div>
                </div>
            </div>
            <div className="mose oat perf">
                <h5>Perfect!</h5>
                <span>The workspace is very perfect!</span>
                <div className="fish">
                    <img src={toy} alt="" />
                    <div className="pull">
                    <p>Edet Asuquo,</p>
                    <p>Web Developer</p>
                    </div>
                </div>
            </div>
            <div className="mose oat kachi">
                <h5>Innovative Environment!</h5>
                <span>This workspace fosters creativity and innovation. It's not just a place to work; it's acommunity of lke-minded individuals who inspire each other. Love the vibe!</span>
                <div className="fish">
                    <img src={toy} alt="" />
                    <div className="pull">
                    <p>Inem Obong</p>
                    <p>Graphics Designer</p>
                    </div>
                </div>
            </div>
            <div className="mose oat kachi">
                <h5>Exceptional Workspace!</h5>
                <span>A fantastic place to work. The ambience is insspiring, the facilities are top-notch, and the team is incredibly supportive. Highly recommended!</span>
                <div className="fish">
                    <img src={girl} alt="" />
                    <div className="pull">
                    <p>Glory-praise</p>
                    <p>Blockchain Developer</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
    <div className="kat pa-d">
        <div className="container">
            <p>Questions</p>
            <h2>Text Us Your Questions</h2>
            <h4>The SMS-Style FAQ Section You'll Love</h4>
        </div>
        <div className="ama">
            <div className="vue">
            <img src={toy} alt=""/>
            <p className="blue">When is your opening time?</p> 
           </div>
           <div className="vue">
            <p className="pen">Our opening hours are from 9am-5:30pm daily.</p>
            <img src={girl} alt=""/> 
           </div>
           <div className="vue">
            <img src={man} alt=""/>
            <p>How accessible is your workspace?</p> 
           </div>
           <div className="vue">
            <p className="pex">Our workspace is easily accesible and is located at No. 3 Oku Street, off Ekpene Road, Uyo. Akwa Ibom State.</p>
            <img src={girl} alt=""/> 
           </div>
           <div className="vue">
            <img src={vin} alt=""/>
            <p>What services are available at your workspace?</p> 
           </div>
           <div className="vue">
            <p className="pex">We have a conducive and cozy working space with free wifi, steady power supply and secure access.</p>
            <img src={girl} alt=""/> 
           </div>
       </div>
    </div>
    <section id="fox" className="pa-d">
        <div className="valve">
            <div className="gex">
            <h4>Subscribe to our newsletter</h4>
            <p>join a group of like-minded nomads. be the first to get updates on our offers, new deals and discounts for every plan.</p>
             </div>
            <div className="input">
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
export default Office