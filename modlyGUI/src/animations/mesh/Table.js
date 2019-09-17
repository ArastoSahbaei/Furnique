import * as THREE from "three";
import DarkMarbleTexture from '../textures/DarkMarble'
import WoodTexture from '../textures/Wood'

export default ({ scene }) => {
    const boxWidth = 1.5; const boxDepth = 0.1; const boxHeight = 1.5;
    const tableBoardGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
    const tableBoardMaterial = new THREE.MeshStandardMaterial({map: WoodTexture(), wireframe: false});
    const tableBoard = new THREE.Mesh(tableBoardGeometry, tableBoardMaterial);
   
    const tableLegsGeometry = new THREE.BoxGeometry(0.05, 1.3, 0.05);
    const tableLegsMaterial = new THREE.MeshStandardMaterial(({map: WoodTexture(), wireframe: false}));
    const tableLeg1 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); const tableLeg2 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); const tableLeg3 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); const tableLeg4 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);

    tableBoard.name = 'tableSurface'
    tableLeg1.name = 'tableLeg1'
    tableLeg2.name = 'tableLeg2'
    tableLeg3.name = 'tableLeg3'
    tableLeg4.name = 'tableLeg4'

    tableBoard.castShadow = true; 
    tableLeg1.castShadow = true;      tableLeg2.castShadow = true;      tableLeg3.castShadow = true;      tableLeg4.castShadow = true;
    tableLeg1.receiveShadow = true;   tableLeg2.receiveShadow = true;   tableLeg3.receiveShadow = true;   tableLeg4.receiveShadow = true; 

    tableBoard.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
    scene.add(tableBoard);
  }
