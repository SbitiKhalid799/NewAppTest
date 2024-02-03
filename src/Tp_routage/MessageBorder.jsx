export default function Msg(props){
    const {setDDisplay,message,setOk,Display} = props
    return(
        <div style={{display:Display}} className="brdMsg">
            <div className="borderChois">
                <h1>
                    {message}
                </h1>
                <div>
                    <input type="button" onClick={()=> setOk(true)} value='Oui'/>
                    <input type="button" onClick={()=>setDDisplay('none')} value='Non'/>
                </div>
            </div>
        </div>
    )
}