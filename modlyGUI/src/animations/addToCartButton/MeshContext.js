import React, {useState, createContext} from 'react';

export const MeshContext = createContext();

export const MeshProvider = (props) => {

  const [meshObjects, setMeshObjects] = useState({name: "roflmao", price: 13});

  return (
    <MeshContext.Provider value={[meshObjects, setMeshObjects]}>
      {props.children}
    </MeshContext.Provider>
  )
}