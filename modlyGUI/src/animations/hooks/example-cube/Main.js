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
      const [showGrid, toggleShowGrid] = useState(true);
      const [showCube, toggleShowCube] = useState(true);
      const [cartObject, setCartObject] = useState({
        id: null,
        tableWidth: 1.5,
        tableLength: 1.5,
        tableHeight: 0.6,
        rotationSpeed: 0.001,
        legWidth: 2,
        legLength: 2,
        legHeight: 1.3,
        legAxisX: 0.65,
        legAxisY: 0.65,
      })

      const rangeSlider = useRef();
      const rangeBullet = useRef();
      window.addEventListener("input", showSliderValue, false);

      function showSliderValue() {
      const bulletPosition = (rangeSlider.current.value /rangeSlider.current.max);
      console.log(rangeSlider.current.value /rangeSlider.current.max)
      rangeBullet.current.style.left = (bulletPosition * 275) + "px";
      }

      function realisticMeasurements(measurements) {
            return Math.round(measurements*100)
      }

      function priceCalculattion() {
            return Math.round((cartObject.tableWidth * 100) + (cartObject.tableLength * 100) + (cartObject.tableHeight * 100))
      }

  return (
    <SceneManager getCamera={getCamera} getRenderer={getRenderer} getScene={getScene} canvasStyle={{height: '40%', width: '40%'}}>
      <CameraControls />
      {showGrid && <Grid />}
      {showCube && <Table cartObject={cartObject}/>}

      <div className="adjustmentSection">
              
            <Accordion title="Surface">

      <div className="isParent">
            <p className="adjustmentValue" ref={rangeBullet}>{realisticMeasurements(cartObject.tableWidth)}</p>
            <p className="adjustTitle">Width</p> 
            <input type="range" ref={rangeSlider} min="0.0" max="3" step="0.01"  value={cartObject.tableWidth} onChange={e => setCartObject({...cartObject, tableWidth: e.target.value})} />        
      </div>

      <div className="isParent2">
            <p className="adjustmentValue"> {realisticMeasurements(cartObject.tableLength)}</p>
            <p className="adjustTitle">Length</p> 
            <input type="range" id="rs-range-line" min="0.0" max="3" step="0.01" value={cartObject.tableLength} onChange={e => setCartObject({...cartObject, tableLength: e.target.value})} />        
      </div>

      <div className="isParent3">
            <p className="adjustmentValue">{realisticMeasurements(cartObject.tableHeight)}</p> 
            <p id="rs-bullet" className="adjustTitle">Height</p>
            <input type="range" id="rs-range-line" min="0.0" max="3" step="0.01" value={cartObject.tableHeight} onChange={e => setCartObject({...cartObject, tableHeight: e.target.value})} />         
      </div>
            </Accordion>

     <br />  <Accordion title="Legs">
            <p className="adjustmentValue">{cartObject.legWidth}</p> <br />
            <p className="adjustTitle">Width</p> 
            <input type="range" id="rs-range-line" min="0.0" max="3" step="0.01" value={cartObject.legWidth} onChange={e => setCartObject({...cartObject, legWidth: e.target.value})} />      

            <p className="adjustmentValue">{cartObject.legLength}</p> <br />
            <p className="adjustTitle">Length</p> 
            <input type="range" id="rs-range-line" min="0.0" max="3" step="0.01" value={cartObject.legLength} onChange={e => setCartObject({...cartObject, legLength: e.target.value})} />      

            <p className="adjustmentValue">{cartObject.legHeight}</p> <br />
            <p className="adjustTitle">Height</p> 
            <input type="range" id="rs-range-line" min="0.0" max="3" step="0.01" value={cartObject.legHeight} onChange={e => setCartObject({...cartObject, legHeight: e.target.value})} />       

            <p className="adjustmentValue">{cartObject.legAxisX}</p> <br />
            <p className="adjustTitle"> <i class="fas fa-question-circle"></i> X-Axis</p> 
            <input type="range" id="rs-range-line" min="0.0" max="3" step="0.01" value={cartObject.legAxisX} onChange={e => setCartObject({...cartObject, legAxisX: e.target.value})} />  

            <p className="adjustmentValue">{cartObject.legAxisY}</p> <br />
            <p className="adjustTitle"> <i class="fas fa-question-circle"></i> Y-Axis</p> 
            <input type="range" id="rs-range-line" min="0.0" max="3" step="0.01" value={cartObject.legAxisY} onChange={e => setCartObject({...cartObject, legAxisY: e.target.value})} />  
            </Accordion>

            <br />  <Accordion title="Other">
            <p className="adjustmentValue"> {cartObject.rotationSpeed * 100}</p>
            <p className="adjustTitle">Rotation</p> 
            <input type="range" id="rs-range-line" min="0" max="0.005" step="0.001" value={cartObject.rotationSpeed} onChange={e => setCartObject({...cartObject, rotationSpeed: e.target.value})} />  

            <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> show grid   <br /> 
            <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} /> show table  <br /> 
            </Accordion>
<hr/>
                <AddToCartButton meshObjectValues={cartObject}/>
                <p className="finalPrice">{priceCalculattion()} €</p>
        </div>
    </SceneManager >
  );
};

export default CubeExample;
