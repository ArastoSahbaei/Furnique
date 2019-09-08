import React from 'react'
import './Shop.css'
import * as THREE from "three";
import {OrbitControls} from "three/examples/jsm/controls/OrbitControls";
import * as dat from 'dat.gui';

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
    renderer.setPixelRatio(window.devicePixelRatio)
    document.body.append(renderer.domElement);

    const boxWidth = 1; const boxDepth = 0.1; const boxHeight = 1;
    const tableBoardGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
    const textureLoader = new THREE.TextureLoader();
    const customPicture = textureLoader.load('https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg')
    const tableBoardMaterial = new THREE.MeshLambertMaterial({map: customPicture, wireframe: false})
    const tableBoard = new THREE.Mesh(tableBoardGeometry, tableBoardMaterial)
    tableBoard.position.set(0, 0, 0)

    const tableLegDepth = 1.7 // Depth of the legs
    const tableLegsGeometry = new THREE.BoxGeometry(0.05, tableLegDepth, 0.05);
    const tableLegsMaterial = new THREE.MeshLambertMaterial(({map: customPicture, wireframe: false}))
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
    const floorMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false}),
    floor = new THREE.Mesh( floorGeometry, floorMaterial );
    floor.position.set(0, -tableLegDepth/2, 0) //This keeps the floor at bottom of the tableLegs

    const lightAndShadow = () => {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        const lightIntensity = 1.3; const lightDistance = 18;
        const light = new THREE.PointLight(0xffffff, lightIntensity, lightDistance);
        light.position.set(1, 1, 1)
        scene.add(light, ambientLight);
}

    const displayObjects = () => {
        tableLeg1.add(floor);
        tableBoard.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
        scene.add(tableBoard);
    }

    const orbitCamera = () => {
        const controls = new OrbitControls(camera, renderer.domElement);
        controls.enableDamping = true;
        controls.dampingFactor = 0.25;
        controls.enablePan = false;
        controls.enableZoom = true;
        controls.zoomSpeed = 0.001;
        controls.enableRotate = true; /* TODO: Single axis changes are OK. Fix this later. */
        controls.rotateSpeed = 0.005;
        controls.update();
    }

    const render = () => {
        requestAnimationFrame(render);
        tableBoard.scale.x = title.TableWidth;
        tableBoard.scale.z = title.TableHeight;
        tableBoard.scale.y = title.TableDepth;

        tableLeg1.scale.x = title.LegsWidth; tableLeg2.scale.x = title.LegsWidth; tableLeg3.scale.x = title.LegsWidth; tableLeg4.scale.x = title.LegsWidth;
        tableLeg1.scale.y = title.LegsHeight; tableLeg2.scale.y = title.LegsHeight; tableLeg3.scale.y = title.LegsHeight; tableLeg4.scale.y = title.LegsHeight;
        tableLeg1.scale.z = title.LegsDepth; tableLeg2.scale.z = title.LegsDepth; tableLeg3.scale.z = title.LegsDepth; tableLeg4.scale.z = title.LegsDepth;

        tableBoard.rotation.y -= title.RotationSpeed;
        renderer.render(scene, camera);
        orbitCamera()
        console.log(tableBoard.scale.z)
     }

     var gui = new dat.GUI();
     var controls = function() {
         this.TableWidth = 1;
         this.TableHeight = 1;
         this.TableDepth = 1;
         this.LegsWidth = 1;
         this.LegsHeight = 1;
         this.LegsDepth = 1;
         this.RotationSpeed = 0.005;
    }
    var title = new controls();
    
    var surface = gui.addFolder('Surface')
    surface.add(title, 'TableWidth', 1, 3);
    surface.add(title, 'TableHeight', 1, 3);
    surface.add(title, 'TableDepth', 1, 3);
    
    var legs = gui.addFolder('Legs')
    legs.add(title, 'LegsWidth', 1, 3);
    legs.add(title, 'LegsHeight', 1, 3);
    legs.add(title, 'LegsDepth', 1, 3);
    
    gui.add(title, 'RotationSpeed', 0.005, 0.1);

    displayObjects();
    lightAndShadow();
    render();

    return (
        <div>
           
        </div>
    )

}
