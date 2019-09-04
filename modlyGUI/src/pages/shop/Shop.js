import React from 'react'
import './Shop.css'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";

export default function Shop() {

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(35, (window.innerWidth / window.innerHeight), 0.1, 1000);
    camera.position.z = 8;
    camera.position.y = 2;
    camera.lookAt( scene.position );

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })
    
    const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0xb7d6fb); 
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.append(renderer.domElement);

    const boxWidth = 1; const boxHeight = 0.1; const boxDepth = 1;
    const tableBoardGeometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const textureLoader = new THREE.TextureLoader();
    const customPicture = textureLoader.load('https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg')
    const tableBoardMaterial = new THREE.MeshLambertMaterial({map: customPicture})
    const tableBoard = new THREE.Mesh(tableBoardGeometry, tableBoardMaterial)
    tableBoard.position.set(0, 0, 0)

    const tableLegPosition = (boxWidth * 0.45); //Positioning the legs
    const tableLegHeight = 0.8 // Height of the legs
    const tableLegHeightPosition = (tableLegHeight/2) //Keeping the leg position under table (avoiding the leg to cut through the table)

    const tableLegsGeometry = new THREE.BoxGeometry(0.05, tableLegHeight, 0.05);
    const tableLegsMaterial = new THREE.MeshLambertMaterial(({map: customPicture}))
    const tableLeg1 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    const tableLeg2 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    const tableLeg3 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    const tableLeg4 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    tableLeg1.position.set(tableLegPosition, -tableLegHeightPosition, -0.4)
    tableLeg2.position.set(-tableLegPosition, -tableLegHeightPosition, -0.4)
    tableLeg3.position.set(-tableLegPosition, -tableLegHeightPosition, 0.4)
    tableLeg4.position.set(tableLegPosition, -tableLegHeightPosition, 0.4)

    const floorGeometry = new THREE.PlaneGeometry( 1000, 1000, 10, 10 );
    floorGeometry.rotateX( - Math.PI / 2 );
    const floorTexture = new THREE.TextureLoader().load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOcWSD0K2mPwokAFfZIhq5Xl49bh8B17RlU6NqCGa4UOKydgX');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(20, 20);
    const floorMaterial = new THREE.MeshBasicMaterial({color: 0x7c7d81}),
    floor = new THREE.Mesh( floorGeometry, floorMaterial );



    const lightAndShadow = () => {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        const light = new THREE.PointLight(0xffffff, 1.3, 18);
        light.position.set(1, 1, 1)
        light.castShadow = true
        light.shadow.camera.near = 0.7
        light.shadow.camera.far = 25
        light.position.set(0.3, 2, 2);
        scene.add(light, ambientLight);
}

    const displayObjects = () => {
        tableBoard.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
        scene.add(tableBoard);
    }

    const orbitCamera = () => {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.001;
        controls.enableZoom = false;
        controls.enableKeys = false;
        controls.enableRotate = true; /* TODO: Single axis changes are OK. Fix this later. */
        controls.rotateSpeed = 0.05;
        controls.update();
    }

    const animate = () => {
        requestAnimationFrame(animate);
        tableBoard.rotation.y -= 0.005;
        renderer.render(scene, camera);
        orbitCamera()
    }

    displayObjects();
    lightAndShadow();
    animate();
   
    return (
        <div>
            {console.log("tableBoard Position:")}
            {console.log(tableBoard.position)}
            {console.log("tableLeg Position:")}
            {console.log(tableLeg1.position)}
            {console.log("floor Position:")}
            {console.log(floor.position)}
        </div>
    )

}
