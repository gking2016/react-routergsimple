import React, { Component } from 'react';
import db from '../Constants/dB';
import { Link } from "react-router-dom";

class BodyContent extends Component {
  render() {
      let w = {
        width:"18rem"
      }
    return <>
    <div className="container d-flex p-3 justify-content-center">   
            {db.map(item => {
            return (
                <div className="card shadow p-3 md-3 round ms-3" style={w} key={item.key}>
                    <img className="card-img-top" src={item.img} alt=""/>
                    <div className="card-body">
                        <Link to={"/Lorem1"} state={{item}}>
                        <h5 className="card-title">{item.name}</h5>
                        </Link>
                        <p className="card-text">{item.desc}</p>
                        <button className="btn btn-primary">Click me</button>
                    </div>
                </div>
            )
            })}
            
        </div>
    </>;
  }
}

export default BodyContent;
