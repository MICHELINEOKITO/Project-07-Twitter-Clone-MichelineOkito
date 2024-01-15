import { NavLink } from "react-router-dom";

const Navigation = ({src, url, text,className}) =>{
    return(
        <NavLink to={url} className={className}>
            <img src={src} />
            <p>{text}</p>
        </NavLink>

    )
}
export default Navigation;