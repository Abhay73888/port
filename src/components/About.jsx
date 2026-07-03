import abimg from "../assets/beach.svg"
function About()
{
    return(
        <>
        <section className="container my-5">
            <h1>About me </h1>
            <p>learn more </p>
            <div className="row">

                <div className="col-lg-6">
                    <img src={abimg}
                    className="img-fluid rounded-circle shadow-lg my-2"
                                        alt="om namah"
                    />
                
                </div>
                
                <div className="col-lg-6">
                  <h1>Full stack ddeveloper</h1>  
                  <p>Passionate developer with experience in building responsive websites and web applications using modern technologies like HTML, CSS, JavaScript, React, Node.js and MySQL.</p>
                  <section className="conatiner2">
                    <div className="row">
                        <div className="col-lg-6">
                            <h1>Name : John Doe</h1>
                        </div>
                    </div>
                  </section>
                </div>
            </div>
        </section>
        </>
    )
}
export default About