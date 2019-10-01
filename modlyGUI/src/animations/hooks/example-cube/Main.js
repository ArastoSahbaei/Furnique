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

  return (
    <SceneManager getCamera={getCamera} getRenderer={getRenderer} getScene={getScene} canvasStyle={{height: '40%', width: '40%'}}>
      <CameraControls />
      {showGrid && <Grid />}
      {showCube && <Table />}
     {/*  {showCube && <Cube color={Number(`0x${color}`)} />} */}

      <div>
          <input type="text" placeholder="enter a hex color" onChange={e => changeColor(e.target.value)} />
            <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> show grid 
            <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} /> show table 
        </div>
    </SceneManager>
  );
};

export default CubeExample;
