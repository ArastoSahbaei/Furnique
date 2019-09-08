import * as THREE from "three";
export default function SceneSubject(scene) {
	
    const boxWidth = 1; const boxDepth = 0.1; const boxHeight = 1;
    const tableBoardGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
    const textureLoader = new THREE.TextureLoader();
    const customPicture = textureLoader.load('https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg')
    const tableBoardMaterial = new THREE.MeshLambertMaterial({color: 0x6700cd, wireframe: false})
    const tableBoard = new THREE.Mesh(tableBoardGeometry, tableBoardMaterial)
    tableBoard.position.set(0, 0, 0)

    const tableLegDepth = 1.7 // Depth of the legs
    const tableLegsGeometry = new THREE.BoxGeometry(0.05, tableLegDepth, 0.05);
    const tableLegsMaterial = new THREE.MeshLambertMaterial(({color: 0x6700cd, wireframe: false}))
    const tableLeg1 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); const tableLeg2 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);
    const tableLeg3 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); const tableLeg4 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);
    tableLeg1.position.set(boxWidth * 0.45, -tableLegDepth/2, -0.4); tableLeg2.position.set(-boxWidth * 0.45, -tableLegDepth/2, -0.4)
    tableLeg3.position.set(-boxWidth * 0.45, -tableLegDepth/2, 0.4); tableLeg4.position.set(boxWidth * 0.45, -tableLegDepth/2, 0.4)

    const floorWidh = 1000; const floorHeight = 1000; const floorWidthSegments = 50; const floorHeightSegments = 50;
    const floorGeometry = new THREE.PlaneGeometry( floorWidh, floorHeight, floorWidthSegments, floorHeightSegments );
    floorGeometry.rotateX( - Math.PI / 2 );
    const floorTexture = new THREE.TextureLoader().load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOcWSD0K2mPwokAFfZIhq5Xl49bh8B17RlU6NqCGa4UOKydgX');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(20, 20);
    const floorMaterial = new THREE.MeshBasicMaterial({color: 0x000000, wireframe: false}),
    floor = new THREE.Mesh( floorGeometry, floorMaterial );
    floor.position.set(0, -tableLegDepth/2, 0) //This keeps the floor at bottom of the tableLegs

    tableLeg1.add(floor);
    tableBoard.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
    scene.add(tableBoard);
    
    const light = new THREE.PointLight("#2222ff", 13338);
    scene.add(light);

    const render = () => {
        tableBoard.rotation.y -= 0.01;
    }

    render()

/* 	this.update = function(time) {
		const scale = Math.sin(time)+2;

		tableBoard.scale.set(scale, scale, scale);
	} */
}