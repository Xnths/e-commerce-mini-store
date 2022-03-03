import React, {Component} from "react";
import { useLocation } from "react-router-dom";

export const LocationDisplay = () => {
    const location = useLocation();
    
    return <div data-testid="location-display">{location.pathname}</div>
}

class Produto extends Component {
    render () {
        return (
            <div>
                <h2></h2>
                <LocationDisplay/>
            </div>
        )
    }
}

export default Produto;
