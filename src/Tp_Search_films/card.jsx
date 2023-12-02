export default function Card(props){
    const {movie,setIdMovie,setTop} = props
    return(
        <div className="col-xl-3 col-lg-4 col-md-4 col-sm-6 col-12">
            <div class="container mt-5">
            <div class="card">
                <img onClick={()=>{
                    setIdMovie(movie.imdbID)
                    setTop(40)
                }} className="image" src={movie.Poster} alt="Film Poster"/>
            </div>
            </div>
        </div>
    )
}