import React from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Lorem1(props) {
  const location = useLocation();
  const { item } = location.state;
  return <div className="p-5">
    <Link className="btn btn-primary relg" to="/">back home</Link>
    <div className="container1 shadow  rounded">
    <img src={item.img} alt={item.name}/>
    <h1>{item.name}</h1>
    <p>{item.desc}</p>
    <button className="btn btn-primary">Read More..</button>
    </div>
  </div>;
}
