import { Link } from "react-router-dom";
import { useState } from "react";

export default function NavBtns(){
    const N = 'normal';
    const B = 'bold';   
    const [style1,setStyle1] = useState({s1:{fontWeight:B},s2:{},s3:{}});
    const ChangeStyle = (s1,s2,s3) =>{
        setStyle1({
                s1:{fontWeight:s1},
                s2:{fontWeight:s2},
                s3:{fontWeight:s3}
            })
    }
    return(
        <>
            <Link to='/Home'>
                <button style={style1.s1} onClick={()=>ChangeStyle(B,N,N)} className="btnsCh b_1" >Acceuil</button>
            </Link>
            <Link to='/Add'>
                <button style={style1.s2} onClick={()=>ChangeStyle(N,B,N)} className="btnsCh b_2" >Ajouter</button>
            </Link>
            <Link to='/Show'>
                <button style={style1.s3} onClick={()=>ChangeStyle(N,N,B)} className="btnsCh b_3" >Afficher</button>
            </Link>
        </>
    )
}