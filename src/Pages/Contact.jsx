import Footer from "../Component/Footer"
import Header from "../Component/Header"
import Foot from "../Component/Foot"
import fix from "../../src/Images/fix.jpeg"
import { useState } from "react"
const Contact=()=>{
 const [inputValue1, setInputValue1]=useState('');
 const [inputValue2, setInputValue2]=useState('');
 const [inputValue3, setInputValue3]=useState('');
 const [inputValue4, setInputValue4]=useState('');
 const [inputValue5, setInputValue5]=useState('');
 const [inputValue6, setInputValue6]=useState('');
 const [inputValue7, setInputValue7]=useState('');
 function handleInputChange(event){
    setInputValue1(event.target.value);
 }
 function inputChange(event){
    setInputValue2(event.target.value);
 }
 function show(event){
    setInputValue3(event.target.value);
 }
 function change(event){
    setInputValue4(event.target.value);
 }
 function vast(event){
    setInputValue5(event.target.value);
 }
 function fetch(event){
    setInputValue6(event.target.value);
 }
 function come(event){
    setInputValue7(event.target.value);
 }
 function handleClearClick(){
    setInputValue1('');
    setInputValue2('');
    setInputValue3('');
    setInputValue4('');
    setInputValue5('');
    setInputValue6('');
    setInputValue7('');
 }
 
return(
    <div className="vin">
     <div>
      <Header/>
     </div>
     <div className="kass pa-d">
        <img src={fix} alt="" />
    </div>
    <div className="form">
        <div className="for">
            <h2>Contact Form</h2>
            <p>EightsSpace....Your Launchpad to Success!</p>
            <hr />
        </div>
        <div className="for farm">
            <p><span></span>Indicates required question</p>
        </div>
    </div>
    <div className="form-con">
        <div className="kless">
        <p>First Name<span></span></p>
        <input type="text" placeholder="Your answer" value={inputValue1} onChange={handleInputChange} maxLength={15}/>
        </div>
        <div className="kless">
        <p>Last Name<span></span></p>
        <input type="text" placeholder="Your answer"value={inputValue2} onChange={inputChange} maxLength={10}/>
        </div>
        <div className="kless">
        <p>Email<span></span></p>
        <input type="text" placeholder="Your answer"value={inputValue3} onChange={show} maxLength={18}/>
        </div>
        <div className="kless">
        <p>Phone Number<span></span></p>
        <input type="text" placeholder="Your answer"value={inputValue4} onChange={change} maxLength={11}/>
        </div>
        <div className="kless">
        <p>Company Name<span></span></p>
        <input type="text" placeholder="Your answer"value={inputValue5} onChange={vast} maxLength={20}/>
        </div>
        <div className="kless">
        <p>Location<span></span></p>
        <input type="text" placeholder="Your answer"value={inputValue6} onChange={fetch} maxLength={18}/>
        </div>
        <div className="kless">
        <p>Your Message<span></span></p>
        <input type="text" placeholder="Your answer"value={inputValue7} onChange={come} maxLength={70}/>
        </div>
        <div className="clear-form">
            <button>Submit</button>
            <p onClick={handleClearClick}>Clear form</p>
        </div>
    </div>
  <Foot/>
 </div>
)
}
export default Contact