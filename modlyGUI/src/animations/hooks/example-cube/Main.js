import React, { useState, useRef } from 'react';
import SceneManager from '../ThreeJSManager';
import './Main.css'
import Table from './mesh/Table';
import Grid from './mesh/Grid';
import AddToCartButton from '../../../components/addToCartButton/AddToCartButton'
import CameraControls from '../ThreeJSManager/CameraControls'
import { getCamera, getRenderer, getScene } from './threeSetup';
import Accordion from '../../../components/accordion/Accordion'

const CubeExample = () => {
   const rangeSlider = useRef();
  const rangeBullet = useRef();
  window.addEventListener("input", showSliderValue, false);
  function showSliderValue() {
    var bulletPosition = (rangeSlider.current.value /rangeSlider.current.max);
    rangeBullet.current.style.left = (bulletPosition * 275) + "px";
  }
  
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

      <div className="isParent">
            <p className="adjustmentValue" ref={rangeBullet}>{cartObject.tableWidth}</p>
            <p className="adjustTitle">Width</p> 
            <input type="range" ref={rangeSlider} min="0" max="1000" step="1"  value={cartObject.tableWidth} onChange={e => setCartObject({...cartObject, tableWidth: e.target.value})} />        
      </div>

      <div className="isParent2">
            <p id="rs-bullet" className="adjustmentValue"> {cartObject.tableLength}</p>
            <p className="adjustTitle">Length</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.tableLength} onChange={e => setCartObject({...cartObject, tableLength: e.target.value})} />        
      </div>

            <p className="adjustTitle">Height</p>
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.tableHeight} onChange={e => setCartObject({...cartObject, tableHeight: e.target.value})} />         
            <p className="adjustmentValue">{cartObject.tableHeight} cm</p> 
            </Accordion>

     <br />  <Accordion title="Legs">
            <p className="adjustTitle">Width</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legWidth} onChange={e => setCartObject({...cartObject, legWidth: e.target.value})} />      
            <p className="adjustmentValue">{cartObject.legWidth} cm</p> <br />

            <p className="adjustTitle">Length</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legLength} onChange={e => setCartObject({...cartObject, legLength: e.target.value})} />      
            <p className="adjustmentValue">{cartObject.legLength} cm</p> <br />

            <p className="adjustTitle">Height</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legHeight} onChange={e => setCartObject({...cartObject, legHeight: e.target.value})} />       
            <p className="adjustmentValue">{cartObject.legHeight} cm</p> <br />

            <p className="adjustTitle"> <i class="fas fa-question-circle"></i> X-Axis</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legAxisX} onChange={e => setCartObject({...cartObject, legAxisX: e.target.value})} />  
            <p className="adjustmentValue">{cartObject.legAxisX} cm</p> <br />

            <p className="adjustTitle"> <i class="fas fa-question-circle"></i> Y-Axis</p> 
            <input type="range" id="rs-range-line" min="0" max="10" value={cartObject.legAxisY} onChange={e => setCartObject({...cartObject, legAxisY: e.target.value})} />  
            <p className="adjustmentValue">{cartObject.legAxisY} cm</p> <br />
            </Accordion>

            <br />  <Accordion title="Other">
            <p className="adjustTitle">Rotation</p> 
            <input type="range" id="rs-range-line" className="rs-range" min="0" max="10" onChange={e => setCartObject({...cartObject, rotationSpeed: e.target.value/200})} />  
            <p className="adjustmentValue"> {cartObject.rotationSpeed}</p>
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
