import { BrowserRouter,Route, Routes } from "react-router-dom";
import NavBtns from "./NavBtns";
import Add from "./Add";
import Show from "./Show";
import Home from "./Home";
import Msg from "./MessageBorder";
import { useState } from "react";

export default function UserAcount(props){
    const {Carde,setCarde,setuser,User} = props;
    const [ok,setOk] = useState(false);
    const urlImg = User.profile;
    const [Display,setDDisplay] = useState('none');
    const [dcnxCon,setCon] = useState(false)
    const Dcnxhandler = () => { // the function of deconnection
        setCon(true) 
        setDDisplay('flex')
    }
    if (ok && dcnxCon){
        setuser('')
        setDDisplay('none')
        setCon(false) 
    }
    return(
        <main id="ConnectionBgcolor">
            <nav className="choises">
                <div className="profileUser">
                    <div style={{backgroundImage:"url('"+urlImg+"')"}} className="profileTmg"></div>
                    <h1 className="text text-light p-4">{User.username}</h1>
                </div>
                <button onClick={()=>Dcnxhandler()} className="dcnx">Déconnecter</button>
            </nav>
            <BrowserRouter>
                <NavBtns/>
                 <Routes>
                      <Route path='/Home' element={<Home/>} />
                      <Route path='/Add' element={<Add Carde={Carde} setCarde={setCarde} />} />
                      <Route path='/Show' element={<Show Carde={Carde} />} />
                  </Routes>
             </BrowserRouter>
             <Msg setDDisplay={setDDisplay} Display={Display}  setOk={setOk} message={"Déconnecter"} />
        </main>
    )
}