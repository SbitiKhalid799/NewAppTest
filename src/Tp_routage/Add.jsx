import { useState } from "react";
import Msg from "./MessageBorder";

export default function Add(props){
    const {Carde,setCarde} = props
    const [id,setId] = useState(''); // La valure de champe ID 
    const [Designation ,setDesignation ] = useState(''); // La valure de champe Désignation 
    const [Prix,setPrix] = useState(''); // La valure de champe Prix
    const [Image,setImage] = useState(''); // La valure de champe Image
    const [Description ,setDescription ] = useState(''); // La valure de champe Description 
    const [Display ,setDDisplay] = useState('none'); // Le display de border des chois 'oui' ou 'non'
    const [Ok ,setOk] = useState(false); // Si lutilisateur clicke sur 'oui' la valeur etre 'true'
    const [Reussi,setReussi] = useState('none')
    const [faild,setfaild] = useState('none')

    if (Ok){ 
        if(id !== ''&& Designation !== ''&& Prix !== ''&& Image !== ''&& Description !== ''){
            setCarde([...Carde,{"id":id,'Designation':Designation,'Prix':Prix,'Image':Image,'Description':Description}])
            setReussi('block')
            setTimeout(()=>{
                setReussi('none')
            },2500)
        }else{
            setfaild('block')
            setTimeout(()=>{
                setfaild('none')
            },2500)
        }
        setDDisplay('none')
        setOk(false)
    }
    // La formulaire de l'ajout
    return(
        <div className="pageAdd">
            <div className="container">
                <div className="row">
                <div className="col-lg-6 col-md-6 col-12">
                    <label className="text text-light pb-1 pt-3" htmlFor="input1">ID :</label>
                    <input onChange={(event)=>setId(event.target.value)} id="input1" className="form-control" type="text" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <label className="text text-light pb-1 pt-3" htmlFor="input2">Désignation :</label>
                    <input onChange={(event)=>setDesignation(event.target.value)} id="input2" className="form-control" type="text" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <label className="text text-light pb-1 pt-3" htmlFor="input3">Prix :</label>
                    <input onChange={(event)=>setPrix(event.target.value)} id="input3" min={0} className="form-control"  type="number" />
                </div>
                <div className="col-lg-6 col-md-6 col-12">
                    <label className="text text-light pb-1 pt-3" htmlFor="fileInput">Image : </label>
                    <input onChange={(event)=>setImage(event.target.value)} id="fileInput" className="form-control" type="file" />
                </div>
                <div className="col-12">
                    <label className="text text-light pb-1 pt-3" htmlFor="textarea">Description :</label>
                    <textarea onChange={(event)=>setDescription(event.target.value)} id="textarea" className="form-control" cols="30" rows="10"></textarea>
                </div>
                <div className="w-100 d-flex justify-content-center">
                    <button onClick={()=>setDDisplay('flex')} className="btn btns my-3">Ajouter</button>
                </div>
                </div>
                <div style={{display:Reussi}} class="alert alert-success text text-center" role="alert">
                    Reussi
                </div>
                <div style={{display:faild}} class="alert alert-danger text text-center" role="alert">
                    Vous remplirez toutes les champes !!! 
                </div>
            </div>

            {/* Le border qui confermer l'ajout d'un element */}
            <Msg setDDisplay={setDDisplay} Display={Display}  setOk={setOk} message={"Ajouter ?"} />
        </div>
    )
}