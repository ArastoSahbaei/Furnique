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
            
            <span>setBordsBredd:</span> <input type="range" id="rs-range-line" min="0" max="1000"  value={cartObject.bordsBredd}
            onChange={e => setCartObject({...cartObject, bordsBredd: e.target.value})} />        
             {cartObject.bordsBredd} cm <br />
            
             <span>setBordslängd:</span> <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.Bordslängd}
             onChange={e => setCartObject({...cartObject, Bordslängd: e.target.value})} />        
             {cartObject.Bordslängd} cm <br/>

             <span>setBordsdjup:</span> <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.Bordsdjup}
            onChange={e => setCartObject({...cartObject, Bordsdjup: e.target.value})} />         
             {cartObject.Bordsdjup} cm 

            <br /> <h3>legs</h3>
            <span>setBenBredd:</span> <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.BenBredd}
            onChange={e => setCartObject({...cartObject, BenBredd: e.target.value})} />      
             {cartObject.BenBredd} cm <br />

             <span>setBenLängd:</span> <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.BenLängd}
            onChange={e => setCartObject({...cartObject, BenLängd: e.target.value})} />      
             {cartObject.BenLängd} cm <br />

             <span>setBenHöjd:</span> <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.BenHöjd}
            onChange={e => setCartObject({...cartObject, BenHöjd: e.target.value})} />       
              {cartObject.BenHöjd} cm <br />

            <span>setBenPositionX:</span> <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.BenPositionX}
            onChange={e => setCartObject({...cartObject, BenPositionX: e.target.value})} />  
             {cartObject.BenPositionX} cm <br />

            <span>setBenPositionY:</span> <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.BenPositionY} 
            onChange={e => setCartObject({...cartObject, BenPositionY: e.target.value})} />  
             {cartObject.BenPositionY} cm <br />

            <h3>Other:</h3>
            <span>RotationSpeed:</span> <input type="range" id="rs-range-line" className="rs-range" min="0" max="10"
            onChange={e => setCartObject({...cartObject, rotationSpeed: e.target.value/200})} />  
            <span> {cartObject.rotationSpeed}</span>
<br/>
<hr/>

            <span>price: {(cartObject.bordsBredd + cartObject.Bordslängd) * 111}€</span>
            <AddToCartButton meshObjectValues={cartObject}/>
        </div>
    </SceneManager >
  );
};

export default CubeExample;
