import React, { useState } from 'react';
import SceneManager from '../ThreeJSManager';
import './Main.css'
import Table from './mesh/Table';
import Grid from './mesh/Grid';
import AddToCartButton from '../../../components/addToCartButton/AddToCartButton'
import CameraControls from '../ThreeJSManager/CameraControls'
import { getCamera, getRenderer, getScene } from './threeSetup';

const CubeExample = () => {
  const [showGrid, toggleShowGrid] = useState(true);
  const [showCube, toggleShowCube] = useState(true);
  const [cartObject, setCartObject] = useState({
    id: null,
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

      <div className="adjustmentSection">
           {/*  <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> show grid   <br /> */}
          {/*   <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} /> show table  <br /> */}
            <input type="range" id="rs-range-line" className="rs-range" min="0" max="10" onChange={e => setCartObject({...cartObject, rotationSpeed: e.target.value/200})} />  
            <span>RotationSpeed: {cartObject.rotationSpeed}</span>   <br />
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, bordsBredd: e.target.value})} />        
            setBordsBredd: {cartObject.bordsBredd}cm <br />
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, Bordslängd: e.target.value})} />        
            setBordslängd: {cartObject.Bordslängd}cm <br/>
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, Bordsdjup: e.target.value})} />         
            setBordsdjup: {cartObject.Bordsdjup}cm 
            <br /> <h3>legs</h3>
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, BenBredd: e.target.value})} />      
            setBenBredd: {cartObject.BenBredd}cm <br />
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, BenLängd: e.target.value})} />      
            setBenLängd: {cartObject.BenLängd}cm <br />
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, BenHöjd: e.target.value})} />       
            setBenHöjd:  {cartObject.BenHöjd}cm <br />
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, BenPositionX: e.target.value})} />  
            setBenPositionX: {cartObject.BenPositionX}cm <br />
            <input type="range" id="rs-range-line" min="0" max="10" onChange={e => setCartObject({...cartObject, BenPositionY: e.target.value})} />  
            setBenPositionY: {cartObject.BenPositionY}cm <br />

<br/>
<hr/>

            <span>price: {(cartObject.bordsBredd + cartObject.Bordslängd) * 111}€</span>
            <AddToCartButton meshObjectValues={cartObject}/>
        </div>
    </SceneManager >
  );
};

export default CubeExample;
