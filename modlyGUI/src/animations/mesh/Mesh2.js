import * as THREE from "three";
import DarkMarbleTexture from '../textures/DarkMarble'
import WoodTexture from '../textures/Wood'
import WhiteMarble from '../textures/WhiteMarble'

export default ({ scene }) => {
    const boxWidth = 1.5; const boxDepth = 0.1; const boxHeight = 1.5;
    const tableBoardGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
    const tableBoardMaterial = new THREE.MeshLambertMaterial({map: DarkMarbleTexture(), wireframe: false});
    const tableBoard = new THREE.Mesh(tableBoardGeometry, tableBoardMaterial);
   
    const tableLegDepth = 1.3 // Depth of the legs
    const tableLegsGeometry = new THREE.BoxGeometry(0.05, tableLegDepth, 0.05);
    const tableLegsMaterial = new THREE.MeshStandardMaterial(({map: WoodTexture(), wireframe: false}));
    const tableLeg1 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); 
    const tableLeg2 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);
    const tableLeg3 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); 
    const tableLeg4 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);
    tableLeg1.position.set(boxWidth * 0.40, -tableLegDepth/2, -0.6); 
    tableLeg2.position.set(-boxWidth * 0.40, -tableLegDepth/2, -0.6);
    tableLeg3.position.set(-boxWidth * 0.40, -tableLegDepth/2, 0.6); 
    tableLeg4.position.set(boxWidth * 0.40, -tableLegDepth/2, 0.6);

    const floorWidh = 200; const floorHeight = 200; const floorWidthSegments = 100; const floorHeightSegments = 100;
    const floorGeometry = new THREE.PlaneGeometry( floorWidh, floorHeight, floorWidthSegments, floorHeightSegments );
    const floorMaterial = new THREE.MeshStandardMaterial({map: WhiteMarble(), side: THREE.DoubleSide, wireframe: false}),
    floor = new THREE.Mesh( floorGeometry, floorMaterial );
    floorGeometry.rotateX( Math.PI / 2 );
    floor.position.set(0, -tableLegDepth/2, 0); //This keeps the floor at bottom of the tableLegs

    tableBoard.name = 'tableSurface'
    tableLeg1.name = 'tableLeg1'
    tableLeg2.name = 'tableLeg2'
    tableLeg3.name = 'tableLeg3'
    tableLeg4.name = 'tableLeg4'

    floor.receiveShadow = true;
    tableBoard.castShadow = true; 
    tableLeg1.castShadow = true;      tableLeg2.castShadow = true;      tableLeg3.castShadow = true;      tableLeg4.castShadow = true;
    tableLeg1.receiveShadow = true;   tableLeg2.receiveShadow = true;   tableLeg3.receiveShadow = true;   tableLeg4.receiveShadow = true; 

    floor.roughness = 1;
    floor.metalness = 1; 
/*  tableBoard.roughness = 0.5;
    tableBoard.metalness = 0.51; */

    tableLeg1.add(floor);
    tableBoard.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
    scene.add(tableBoard);
  }
