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
  const [rotationSpeed, setRotationSpeed] = useState(0.01)
  const [bordsBredd, setBordsBredd] = useState(1.5)
  const [Bordslängd, setBordslängd] = useState(1.5)
  const [Bordsdjup, setBordsdjup] = useState(0.6)
  const [BenBredd, setBenBredd] = useState(2)
  const [BenLängd, setBenLängd] = useState(2)
  const [BenHöjd, setBenHöjd] = useState(1.3)
  const [BenPositionX, setBenPositionX] = useState(0.65)
  const [BenPositionY, setBenPositionY] = useState(0.65)

  const [cartObject] = useState({bordsBredd: {bordsBredd}})

  return (
    <SceneManager getCamera={getCamera} getRenderer={getRenderer} getScene={getScene} canvasStyle={{height: '40%', width: '40%'}}>
      <CameraControls />
      {showGrid && <Grid />}
      {showCube && <Table rotationSpeed={rotationSpeed} 
                          bordsBredd={bordsBredd} 
                          Bordslängd={Bordslängd} 
                          Bordsdjup={Bordsdjup}
                          BenBredd={BenBredd}
                          BenLängd={BenLängd}
                          BenHöjd={BenHöjd} 
                          BenPositionX={BenPositionX} 
                          BenPositionY={BenPositionY} 
                          />}

      <div>
            <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> show grid   <br />
            <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} /> show table  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setRotationSpeed(e.target.value)} /> RotationSpeed <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setBordsBredd(e.target.value)} /> setBordsBredd  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setBordslängd(e.target.value)} /> setBordslängd <br/>
            <input type="range" name="points" min="0" max="10" onChange={e => setBordsdjup(e.target.value)} /> setBordsdjup 
      <br /> <h3>legs</h3>
            <input type="range" name="points" min="0" max="10" onChange={e => setBenBredd(e.target.value)} /> setBenBredd <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setBenLängd(e.target.value)} /> setBenLängd <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setBenHöjd(e.target.value)} />  setBenHöjd  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setBenPositionX(e.target.value)} />  setBenPositionX  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setBenPositionY(e.target.value)} />  setBenPositionY  <br />

        </div>
        <AddToCartButton meshObjectValues={cartObject}/>
    </SceneManager >
  );
};

export default CubeExample;
