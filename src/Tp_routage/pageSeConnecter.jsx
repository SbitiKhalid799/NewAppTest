export default function PageSeConnecter(props){
    const {Animation,seConnercter,getUsername,getPassWorede,message} = props;
    return(
        <main id="ConnectionBgcolor" className='d-flex align-items-center justify-content-center'>
        <div style={Animation} id='Form' className='d-flex flex-column align-items-center justify-content-center'>
            <p style={message} >Le nom d'utilisateur ou le mot de passe set incorrecte !!!</p>
            <h1 className='mb-3'>Connextion</h1>
            <div>
                <h4 className='mt-2'>Nom d'utilisateur</h4>
                <input maxLength={30} onChange={(event)=> getUsername(event)} type="text" placeholder="Entrer le nom d'utilisateur"/>
            </div>
            <div>
                <h4 className='mt-2'>Mot de passe</h4>
                <input maxLength={30} onChange={(event)=>getPassWorede(event)}  type="password" placeholder="Entrer le mote de passe" />
            </div>
            <input onClick={()=> seConnercter()} className='mt-3' type="button" value='Se connecter' />
        </div>
    </main>
    )
}