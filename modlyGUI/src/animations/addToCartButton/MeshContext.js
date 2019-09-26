import React, {useState, createContext} from 'react';

export const MeshContext = createContext();

export const MeshProvider = (props) => {

  const [meshObjects, setMeshObjects] = useState({});

  return (
    <MeshContext.Provider value={[meshObjects, setMeshObjects]}>
      {props.children}
    </MeshContext.Provider>
  )
}