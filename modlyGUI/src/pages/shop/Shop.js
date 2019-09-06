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

    const boxWidth = 2; const boxDepth = 1; const boxHeight = 1;
    const tableBoardGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
    const textureLoader = new THREE.TextureLoader();
    const customPicture = textureLoader.load('https://threejsfundamentals.org/threejs/lessons/resources/images/compressed-but-large-wood-texture.jpg')
    const tableBoardMaterial = new THREE.MeshLambertMaterial({map: customPicture, wireframe: true})
    const tableBoard = new THREE.Mesh(tableBoardGeometry, tableBoardMaterial)
    tableBoard.position.set(0, 0, 0)

    const tableLegPosition = (boxWidth * 0.45); //Positioning the legs
    const tableLegHeight = 1.6 // Height of the legs
    const tableLegHeightPosition = (tableLegHeight/2) //Keeping the leg position under table (avoiding the leg to cut through the table)

    const tableLegsGeometry = new THREE.BoxGeometry(0.05, tableLegHeight, 0.05);
    const tableLegsMaterial = new THREE.MeshLambertMaterial(({map: customPicture, wireframe: true}))
    const tableLeg1 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    const tableLeg2 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    const tableLeg3 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    const tableLeg4 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial)
    tableLeg1.position.set(tableLegPosition, -tableLegHeightPosition, -0.4)
    tableLeg2.position.set(-tableLegPosition, -tableLegHeightPosition, -0.4)
    tableLeg3.position.set(-tableLegPosition, -tableLegHeightPosition, 0.4)
    tableLeg4.position.set(tableLegPosition, -tableLegHeightPosition, 0.4)

    const floorWidh = 1000; const floorHeight = 1000; const floorWidthSegments = 50; const floorHeightSegments = 50;
    const floorGeometry = new THREE.PlaneGeometry( floorWidh, floorHeight, floorWidthSegments, floorHeightSegments );
    floorGeometry.rotateX( - Math.PI / 2 );
    const floorTexture = new THREE.TextureLoader().load('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOOcWSD0K2mPwokAFfZIhq5Xl49bh8B17RlU6NqCGa4UOKydgX');
    floorTexture.wrapS = floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set(20, 20);
    const floorMaterial = new THREE.MeshBasicMaterial({color: 0xFFFFFF, wireframe: false}),
    floor = new THREE.Mesh( floorGeometry, floorMaterial );
    floor.position.set(0, -tableLegHeightPosition, 0) //This keeps the floor at bottom of the tableLegs

    const lightAndShadow = () => {
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        const lightIntensity = 1.3; const lightDistance = 18;
        const light = new THREE.PointLight(0xffffff, lightIntensity, lightDistance);
        light.position.set(1, 1, 1)
        light.castShadow = true
        light.shadow.camera.near = 0.7
        light.shadow.camera.far = 25
        light.position.set(0.3, 2, 2);
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
        /* controls.minPolarAngle = 0.8;
		controls.maxPolarAngle = 0.4; */
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

        tableLeg1.scale.x = title.LegsWidth;
        tableLeg1.scale.y = title.LegsHeight;
        tableLeg1.scale.z = title.LegsDepth;
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
    surface.add(title, 'TableWidth', 1, 10);
    surface.add(title, 'TableHeight', 1, 10);
    surface.add(title, 'TableDepth', 1, 10);
    
    var legs = gui.addFolder('Legs')
    legs.add(title, 'LegsWidth', 1, 10);
    legs.add(title, 'LegsHeight', 1, 10);
    legs.add(title, 'LegsDepth', 1, 10);
    
    gui.add(title, 'RotationSpeed', 0.005, 0.1);
/*      controls.Height.onChange(function(value){
        console.log(value); 
        value = tableLegHeight; // this doesn't work
      }); */

    displayObjects();
    lightAndShadow();
    render();

    return (
        <div>
           
        </div>
    )

}
