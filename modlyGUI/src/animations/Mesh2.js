import * as THREE from "three";

export default ({ scene }) => {
    const boxWidth = 1; const boxDepth = 0.1; const boxHeight = 1;
    const tableBoardGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
    const textureLoader = new THREE.TextureLoader();
    const customPicture = textureLoader.load('https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg');
    const tableBoardMaterial = new THREE.MeshLambertMaterial({map: customPicture, wireframe: false});
    const tableBoard = new THREE.Mesh(tableBoardGeometry, tableBoardMaterial);
    tableBoard.name = 'tableSurface'

    const tableLegDepth = 1.7 // Depth of the legs
    const tableLegsGeometry = new THREE.BoxGeometry(0.05, tableLegDepth, 0.05);
    const tableLegsMaterial = new THREE.MeshLambertMaterial(({map: customPicture, wireframe: false}));
    const tableLeg1 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); 
    const tableLeg2 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);
    const tableLeg3 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); 
    const tableLeg4 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);
    tableLeg1.position.set(boxWidth * 0.45, -tableLegDepth/2, -0.4); 
    tableLeg2.position.set(-boxWidth * 0.45, -tableLegDepth/2, -0.4);
    tableLeg3.position.set(-boxWidth * 0.45, -tableLegDepth/2, 0.4); 
    tableLeg4.position.set(boxWidth * 0.45, -tableLegDepth/2, 0.4);

    const floorWidh = 1000; const floorHeight = 1000; const floorWidthSegments = 50; const floorHeightSegments = 50;
    const floorGeometry = new THREE.PlaneGeometry( floorWidh, floorHeight, floorWidthSegments, floorHeightSegments );
    const floorMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false}),
    floor = new THREE.Mesh( floorGeometry, floorMaterial );
    floorGeometry.rotateX( - Math.PI / 2 );
    floor.position.set(0, -tableLegDepth/2, 0); //This keeps the floor at bottom of the tableLegs

    tableLeg1.add(floor);
    tableBoard.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
    scene.add(tableBoard);
  }








/*   const floorTexture = new THREE.TextureLoader().load('https://2ecffd01e1ab3e9383f0-07db7b9624bbdf022e3b5395236d5cf8.ssl.cf4.rackcdn.com/Product-800x800/2173fb1a-1ddf-47d5-8566-83c2f28135cd.png');
  floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
  floorTexture.repeat.set(20, 20); */