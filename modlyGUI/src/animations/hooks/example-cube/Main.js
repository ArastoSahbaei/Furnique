import React, { useState } from 'react';
import SceneManager from '../ThreeJSManager';
import Cube from './Cube';
import Table from './Table';
import Grid from './Grid';
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
      {showCube && <Cube color={Number(`0x${color}`)} />}
      {showCube && <Table />}

      <div>
          <input type="text" placeholder="enter a hex color" onChange={e => changeColor(e.target.value)} />
          <label>
            <input type="checkbox" checked={showGrid} onChange={() => toggleShowGrid(!showGrid)} /> 
            show grid 
          </label>

          <label>
            <input type="checkbox" checked={showCube} onChange={() => toggleShowCube(!showCube)} />
            show cube
          </label>
        </div>
    </SceneManager>
  );
};

export default CubeExample;
