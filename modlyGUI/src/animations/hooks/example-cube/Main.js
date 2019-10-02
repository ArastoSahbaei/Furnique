import React, { useState } from 'react';
import SceneManager from '../ThreeJSManager';
import Table from './mesh/Table';
import Grid from './mesh/Grid';
import AddToCartButton from '../../../components/addToCartButton/AddToCartButton'
import CameraControls from '../ThreeJSManager/CameraControls'
import { getCamera, getRenderer, getScene } from './threeSetup';

const CubeExample = () => {
  const [showGrid, toggleShowGrid] = useState(true);
  const [showCube, toggleShowCube] = useState(true);
  const [cartObject, setCartObject] = useState({
    bordsBredd: 1.5,
    Bordslängd: 1.5,
    Bordsdjup: 0.6,
    rotationSpeed: 0.05,
    BenBredd: 2,
    BenLängd: 2,
    BenHöjd: 1.3,
    BenPositionX: 0.65,
    BenPositionY: 0.65,
  })

  return (
    <SceneManager getCamera={getCamera} getRenderer={getRenderer} getScene={getScene} canvasStyle={{height: '40%', width: '40%'}}>
      <CameraControls />
      {showGrid && <Grid />}
      {showCube && <Table cartObject={cartObject}/>}

      <div>
            <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> show grid   <br />
            <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} /> show table  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, rotationSpeed: e.target.value})} /> RotationSpeed <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, bordsBredd: e.target.value})} /> setBordsBredd  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, Bordslängd: e.target.value})} /> setBordslängd <br/>
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, Bordsdjup: e.target.value})} /> setBordsdjup 
      <br /> <h3>legs</h3>
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, BenBredd: e.target.value})} /> setBenBredd <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, BenLängd: e.target.value})} /> setBenLängd <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, BenHöjd: e.target.value})} />  setBenHöjd  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, BenPositionX: e.target.value})} />  setBenPositionX  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setCartObject({...cartObject, BenPositionY: e.target.value})} />  setBenPositionY  <br />

        </div>
        <AddToCartButton meshObjectValues={cartObject}/>
    </SceneManager >
  );
};

export default CubeExample;
