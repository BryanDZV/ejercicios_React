import React from "react";

export default function Ropa({ objeto }) {
   const estiloul={
     "display": "flex",
     "gap": "20px",
     "flex-wrap": "nowrap",
   }
   const estiloContenedor = {
     "maxWidth": "100%", 
     "width": "800px",
     "height": "800px",
     "overflow": "hidden",
   };
  const estiloImagen = {
    width: "100%",
    height: "100%",
    objectFit: "cover", 
  };
  const ulColor={
    "display": "flex",
    "list-style": "none",
    "font-size": "20px",
    "gap": "29px",

  }
  const lista={
    "display": "flex",
    "flex-direction": "column",
    "gap": "37px",
  }
  const ul={
    "display": "flex",
    "list-style": "none",
    "place-content": "space-around",
    "font-size" : "20px",
    "gap":"29px",
  }

  return (
    <div>
      <ul style={estiloul}>
        <div style={estiloContenedor}>
          <li >
            <img style={estiloImagen} src={objeto.img} alt="foto" />
          </li>
        </div>
        <div style={lista}>
          <li >{objeto.title}</li>
          <li>{objeto.ref}</li>
          <li>{objeto.price}</li>
          <div>
          <li>
            <div>
              <ul style={ulColor}>
                {objeto.colors.map((elemento, index) => (
                  <li key={index}>{elemento}</li>
                ))}
              </ul>
            </div>
          </li>
        </div>
        <div>
          <li>
            <div>
              <ul style={ul}>
                {objeto.sizes.map((elemento, index) => (
                  <li key={index}>
                    <li>{elemento.name}</li>
                    <li>{elemento.qty}</li>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </div>
        </div>
        
      </ul>
    </div>
  );
}
