import React from "react";

export default function Revius({arrayObjetos}) {
  return (
    <div>
      {arrayObjetos.map((elemento, index) => (
        <div key={index}>
        <ul >
          <li ><img src={elemento.review.avatar} alt="foto" /> </li>
          <li>{elemento.review.rating}</li>
          <li>{elemento.review.title}</li>
          <li>{elemento.review.description}</li>
          <li>{elemento.review.date}</li>
        </ul>
        </div>
      ))}
    </div>
  );
}
