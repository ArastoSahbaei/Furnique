import React, { useState } from 'react';
import SceneManager from '../ThreeJSManager';
import Cube from './mesh/Cube';
import Table from './mesh/Table';
import Grid from './mesh/Grid';
import CameraControls from '../ThreeJSManager/CameraControls'
import { getCamera, getRenderer, getScene } from './threeSetup';

const CubeExample = () => {
  const [color, changeColor] = useState('0000ff');
  const [showGrid, toggleShowGrid] = useState(true);
  const [showCube, toggleShowCube] = useState(true);
  const [rotationSpeed, setRotationSpeed] = useState(0.01)

  return (
    <SceneManager getCamera={getCamera} getRenderer={getRenderer} getScene={getScene} canvasStyle={{height: '40%', width: '40%'}}>
      <CameraControls />
      {showGrid && <Grid />}
      {showCube && <Table rotationSpeed={rotationSpeed} />}
     {/*  {showCube && <Cube color={Number(`0x${color}`)} />} */}

      <div>
           {/*  <input type="text" placeholder="enter a hex color" onChange={e => changeColor(e.target.value)} /> */}
            <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> show grid   <br />
            <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} /> show table  <br />
            <input type="range" name="points" min="0" max="10" onChange={e => setRotationSpeed(e.target.value)} /> RotationSpeed 
        </div>
    </SceneManager>
  );
};

export default CubeExample;
