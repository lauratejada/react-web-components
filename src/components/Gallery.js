import Button from "./Button";

function Gallery(props){
    return(
        <section className="gallery">
            <div className="container flex">
                <h3>We create a unique action plan for brands</h3>
                <p>Get your company heading in the right direction with our digital marketing strategist</p>

                <div className="grid-container">
                    {props.images.map((image) => (
                    <div className="image">
                        <img src={image.url} alt={image.id} />
                    </div>
                    ))}
                </div>
                <div className="middle-button">
                    <Button isPrimary={true} />
                </div>
            </div> 
        </section>
    )
}

export default Gallery;