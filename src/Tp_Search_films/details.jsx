export default function Details(props){
    const {data,Id} = props;
    return(
        <div id='borderDetails' className="row">
            <div className="d-flex justify-content-center align-items-center col-xl-4 col-lg-6 col-md-12 col-sm-12 col-12">
                {data?data.filter((e => Id === e.imdbID)).map(e=><img className="borderImg" src={e.Poster}/>):<p></p>}
            </div>
            <div className="p-4 d-flex justify-content-center align-items-center col-xl-8 col-lg-6 col-md-12 col-sm-12 col-12">
            {data ? data.filter(e => Id === e.imdbID).map((e) => (
                <div>
                    <h2 key={e.imdbID}>Title : {e.Title}</h2>
                    <h3 key={e.imdbID}>Year : {e.Year}</h3>
                    <h3 key={e.imdbID}>Type : {e.Type}</h3>
                </div>
            )) : <p>gg</p>}
            </div>
        </div>
    )
}