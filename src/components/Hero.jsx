import omImg from '../assets/forest.svg'

function Hero()

{
    return(
        <>
        <section className="container">
            <div className="row">
                <div className="col-lg-6">
                    <h3>Hello</h3>
                    <h1>I'm johb</h1>
                    <h2>full stack developer </h2>
                
            <p>
                hello I'm a AI specilist 
            </p>
                </div>
                <div className="col-lg-6">
                    <img src={omImg}
                    className="img-fluid rounded-circle shadow-lg my-2"
                    alt="om namah"
                    />

                </div>
            </div>
        </section>
        </>
    )
}
export default Hero;