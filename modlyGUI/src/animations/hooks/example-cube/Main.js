import React, { useState } from 'react';
import SceneManager from '../ThreeJSManager';
import './Main.css'
import Table from './mesh/Table';
import Grid from './mesh/Grid';
import AddToCartButton from '../../../components/addToCartButton/AddToCartButton'
import CameraControls from '../ThreeJSManager/CameraControls'
import { getCamera, getRenderer, getScene } from './threeSetup';
import Accordion from './Accordion'

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
            <Accordion title="Surface">
            <p className="testo">Width:</p> 
            <input type="range" id="rs-range-line" min="0" max="1000" step="10"  value={cartObject.tableWidth} onChange={e => setCartObject({...cartObject, tableWidth: e.target.value})} />        
            <p className="defege">{cartObject.tableWidth} cm</p> <br />
            <p className="testo">Length:</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.tableLength} onChange={e => setCartObject({...cartObject, tableLength: e.target.value})} />        
            <p className="defege">{cartObject.tableLength} cm</p> <br/>

            <p className="testo">Height:</p>
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.tableHeight} onChange={e => setCartObject({...cartObject, tableHeight: e.target.value})} />         
            <p className="defege">{cartObject.tableHeight} cm</p> 
            </Accordion>

     <br />  <Accordion title="Legs">
            <p className="testo">Width:</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legWidth} onChange={e => setCartObject({...cartObject, legWidth: e.target.value})} />      
            <p className="defege">{cartObject.legWidth} cm</p> <br />

            <p className="testo">Length:</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legLength} onChange={e => setCartObject({...cartObject, legLength: e.target.value})} />      
            <p className="defege">{cartObject.legLength} cm</p> <br />

            <p className="testo">Height:</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legHeight} onChange={e => setCartObject({...cartObject, legHeight: e.target.value})} />       
            <p className="defege">{cartObject.legHeight} cm</p> <br />

            <p className="testo">X-Axis:</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legAxisX} onChange={e => setCartObject({...cartObject, legAxisX: e.target.value})} />  
            <p className="defege">{cartObject.legAxisX} cm</p> <br />

            <p className="testo">Y-Axis:</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legAxisY} onChange={e => setCartObject({...cartObject, legAxisY: e.target.value})} />  
            <p className="defege">{cartObject.legAxisY} cm</p> <br />
            </Accordion>

            <Accordion title="Other">
            <p className="testo">RotationSpeed:</p> <input type="range" id="rs-range-line" className="rs-range" min="0" max="10" onChange={e => setCartObject({...cartObject, rotationSpeed: e.target.value/200})} />  
            <p className="testo"> {cartObject.rotationSpeed}</p>
            </Accordion>
<br/>
<hr/>
                <AddToCartButton meshObjectValues={cartObject}/>
                <p className="finalPrice">{(cartObject.tableWidth + cartObject.tableLength) * 111} €</p>
        </div>
    </SceneManager >
  );
};

export default CubeExample;
