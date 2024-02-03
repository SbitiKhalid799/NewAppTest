import './style.css'; // style avec css
import { useState } from 'react';
import {data} from './data'; // joue le role du base de donner
import PageSeConnecter from './pageSeConnecter';
import UserAcount from './userintairface';
import 'bootstrap/dist/css/bootstrap.min.css'; // Le framework bootstrap5


export default function Connection(){ // Le composont principale
    const [userName,setUserName] = useState(""); // Le nom d'utilisateur
    const [passWored,setPassWored] = useState(''); // Le mot de  pase  d'utilisateur
    const [user,setuser] = useState('');
    const [p_display,setDisplay] = useState('none'); // Le display pour afficher l'error
    const [IdAnim,setIdAnime] = useState('') // prond le nom de l'animarion 'Form'
    const [Carde,setCarde] = useState([
        {
            'id': 1,
            'Designation': 'Produit A',
            'Prix': 19.99,
            'Image': "https://www.pngall.com/wp-content/uploads/2/Video-Game-Controller-Transparent.png",
            'Description': 'Ceci est une description du produit A.'
        },
        {
            'id': 2,
            'Designation': 'Produit B',
            'Prix': 29.99,
            'Image': "https://www.freepnglogos.com/uploads/headphones-png/headphones-beats-pro-beats-dre-22.png",
            'Description': 'Ceci est une description du produit B.'
        },
        {
            'id': 3,
            'Designation': 'Produit C',
            'Prix': 39.99,
            'Image': 'https://pcgamercasa.ma/8899-large_default/pc-gamer-i7-oc-gen-13-13700k1tb-ssd32gbrtx-3060-Pc-Gamer-Casa-Maroc.jpg',
            'Description': 'Ceci est une description du produit C.'
        },
        {
            'id': 4,
            'Designation': 'Produit D',
            'Prix': 49.99,
            'Image': "https://pngimg.com/uploads/iphone_13/iphone_13_PNG2.png",
            'Description': 'Ceci est une description du produit D.'
        }
    ]) // List des element ajouter par las utilisateurs
    const message = { // le style de error 
        display:p_display,
        color:'red',
        fontWeight:'bold'
    }
    const Animation = { // L'animation de formulaire lore ce que on a l'ereur
        animation: " .1s linear 0s 2 normal both" ,
        animationName: IdAnim // Affecter le nom d'animation
    }
    const getUsername = (event) => { // Handler pour geter la valeur de nom saisi par utilisateur
        setUserName(event.target.value)
    }
    const getPassWorede = (event) => { // Handler pour geter la valeur de le mot ed passe saisi par utilisateur
        setPassWored(event.target.value)
    }
    const seConnercter = () => { // La verification de nom et de mot de passe
        data.filter(e => userName === e.username && passWored === e.password)
        .map(e=>setuser(e)) // Prend un objet contient les information d'utilisateur si le nom et le mot de pase exist dane la list des utilisateur
        if (user === ''){
            setIdAnime('Form') // donner le nom animation pour faire la vibration du formulaire d'otentification
            setDisplay('block') // Afficher le message d'ereur
            setTimeout(()=>{ // Apré 2.5s l'animation anuuler
                setDisplay('none') // display d'ereur 'none'
                setIdAnime('') // vider le nom d'animation pour l'arrete
            }, 2500);
        }
    }
    if(user === ''){
        // Le composent de formulaire de otentification
        return(
            <>
                <PageSeConnecter Animation={Animation} message={message} seConnercter={seConnercter} getUsername={getUsername} getPassWorede={getPassWorede} />
            </>
        )
    }else{
        // Le composent d'intairface des compt des utilisateur
        return(
            <>
                <UserAcount Carde={Carde} setCarde={setCarde} setuser={setuser}  User={user}/>
            </>
        )
    }
        
}