import { FaPlay } from "react-icons/fa";
import '../css/edmnav.css'

function Songs(props, songvar) {
    return (
        <div className="prod-card text-center">

            <div>
                <img className="prod-image"
                    src={props.imgsrc} alt={props.name}
                />
            </div>
            <div className="prod-details-card">
                <div>
                    <h2 className="prod-name">{props.name}</h2>
                </div>
                <div>
                    <h4 className="prod-artist-name"><strong>Artist: </strong>{props.artist}</h4>
                </div>
                <div>
                    <span className="prod-genre">Genre: </span><span><i>{props.genre}</i></span>
                </div>
                <div>
                    <span className="prod-price">Price: </span><span><i>$ {props.price}</i></span>
                </div>
                <div>
                    <a href={props.link} target='_blank' rel='noreferrer'>
                        <button className="btn btn-outline-dark"><FaPlay /></button>
                    </a>
                </div>
                <div>
                    <button className="btn btn-outline-dark button-1" onClick={() => { props.addproduct() }}>
                        ADD TO CART
                    </button>
                </div>
            </div>
        </div >
    );
}

export default Songs;