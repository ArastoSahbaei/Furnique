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
    tableWidth: 1.5,
    tableLength: 1.5,
    tableHeight: 0.6,
    rotationSpeed: 0.05,
    legWidth: 2,
    legLength: 2,
    legHeight: 1.3,
    legAxisX: 0.65,
    legAxisY: 0.65,
  })

  return (
    <SceneManager getCamera={getCamera} getRenderer={getRenderer} getScene={getScene} canvasStyle={{height: '40%', width: '40%'}}>
      <CameraControls />
      {showGrid && <Grid />}
      {showCube && <Table cartObject={cartObject}/>}

      <div className="adjustmentSection">
           {/*  <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> show grid   <br /> */}
           {/*   <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} /> show table  <br /> */}
            <h3>Surface</h3>

            <span>settableWidth:</span> 
            <input type="range" id="rs-range-line" min="0" max="1000"  value={cartObject.tableWidth} onChange={e => setCartObject({...cartObject, tableWidth: e.target.value})} />        
            {cartObject.tableWidth} cm <br />
            
            <span>settableLength:</span> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.tableLength} onChange={e => setCartObject({...cartObject, tableLength: e.target.value})} />        
            {cartObject.tableLength} cm <br/>

            <span>tableHeight:</span>
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.tableHeight} onChange={e => setCartObject({...cartObject, tableHeight: e.target.value})} />         
            {cartObject.tableHeight} cm 

     <br /> <h3>Legs</h3>
            <span>setlegWidth:</span> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legWidth} onChange={e => setCartObject({...cartObject, legWidth: e.target.value})} />      
            {cartObject.legWidth} cm <br />

            <span>setlegLength:</span> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legLength} onChange={e => setCartObject({...cartObject, legLength: e.target.value})} />      
            {cartObject.legLength} cm <br />

            <span>setlegHeight:</span> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legHeight} onChange={e => setCartObject({...cartObject, legHeight: e.target.value})} />       
            {cartObject.legHeight} cm <br />

            <span>setlegAxisX:</span> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legAxisX} onChange={e => setCartObject({...cartObject, legAxisX: e.target.value})} />  
            {cartObject.legAxisX} cm <br />

            <span>setlegAxisY:</span> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legAxisY} onChange={e => setCartObject({...cartObject, legAxisY: e.target.value})} />  
            {cartObject.legAxisY} cm <br />

            <h3>Other:</h3>
            <span>RotationSpeed:</span> <input type="range" id="rs-range-line" className="rs-range" min="0" max="10" onChange={e => setCartObject({...cartObject, rotationSpeed: e.target.value/200})} />  
            <span> {cartObject.rotationSpeed}</span>
<br/>
<hr/>

            <span>price: {(cartObject.tableWidth + cartObject.tableLength) * 111}€</span>
            <AddToCartButton meshObjectValues={cartObject}/>
        </div>
    </SceneManager >
  );
};

export default CubeExample;
