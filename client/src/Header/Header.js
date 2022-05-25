import bird from "../bird.svg"
import "./Header.css"

function Header(){
    return(
        <div className="header">
            <img src={bird} className="logo" alt="logo"></img>
        </div>
    );
}

export default Header;