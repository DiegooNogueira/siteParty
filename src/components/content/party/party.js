import React, {Component} from "react";
import './party.css';



class Party extends Component {
    render (){
        return (
            <div className="content">
                <div className="list-card">
                    <div className="card">
                        <img className="img-card" src="https://cdn2.civitatis.com/tailandia/koh-samui/galeria/full-moon-party.jpg"></img>
                        <div className="title-card">
                            Title
                        </div>
                        <div className="card-content">
                            <p className="card-desc">
                                <spam>Festa do branco, sua festa é nossa festa</spam>
                            </p>
                        </div>
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default Party
