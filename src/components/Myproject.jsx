import myimg from "../assets/desert.svg"
function Myproject ()
{
    return(
        <>
        <section className="container my-5 ">
            <div className="rom">
                <div className="col-ln-4">
                    <h1>
                        <div className="card" style={{width: "18rem"}}>
                            <img src={myimg} className="card-img-top" alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">Card title</h5>
                                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                                <a href="#" className="btn btn-primary">Go somewhere</a>
                            </div>
                        </div>
                    </h1>

                </div>
            </div>
        </section>
        </>
    )
}
export default Myproject