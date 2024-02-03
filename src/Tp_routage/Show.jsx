export default function Show(props){
    const {Carde} = props
    return(
        <div className="pageShow">
            <div className="container">
                <div className="row">
                    {Carde.map((e,i)=>(
                        <div key={i} className="ccard col-xl-3 col-lg-4 col-md-4 col-sm-12 p-2">
                            <div className="card produites d-flex align-items-center justify-content-center">
                                <img src={e.Image}  className="card-img-top" alt="..."/>
                            </div>
                        </div>
                        ))}
                </div>
            </div>
        </div>
    )
}