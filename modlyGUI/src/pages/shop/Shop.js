import React from 'react'
import './Shop.css'
import * as THREE from "three";

export default function Shop() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(105, (window.innerWidth / window.innerHeight), 0.1, 1000);
    camera.position.z = 8;
    camera.position.y = 4;
    camera.lookAt( scene.position )
    var renderer = new THREE.WebGLRenderer({antialias: true});

/*     renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.BasicShadowMap; */


    renderer.setClearColor(0xb7d6fb);
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.append(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })

    const boxWidth = 2; const boxHeight = 1; const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    
    const tableLegs = new THREE.BoxGeometry(0.3, 10, 0.3);
    var loader = new THREE.TextureLoader();
    var material = new THREE.MeshLambertMaterial({ map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg') })
    var tableMaterial = new THREE.MeshLambertMaterial({ color: 0x3262a8, shininess: 50, shading: THREE.SmoothShading })
    var tableBoard = new THREE.Mesh(geometry, material)
/*     mesh.receiveShadow = true;
    mesh.castShadow = true; */
    var tableLeg1 = new THREE.Mesh(tableLegs, tableMaterial)
    var tableLeg2 = new THREE.Mesh(tableLegs, tableMaterial)
    var tableLeg3 = new THREE.Mesh(tableLegs, tableMaterial)
    var tableLeg4 = new THREE.Mesh(tableLegs, tableMaterial)
    
    var group = new THREE.Group();
    tableBoard.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
        
    scene.add(tableBoard);

    tableBoard.position.set(0, 1.15, 1)
    tableLeg1.position.set(0.9, -6, -0.4)
    tableLeg2.position.set(-0.9, -6, -0.4)
    tableLeg3.position.set(-0.9, -6, 0.4)
    tableLeg4.position.set(0.9, -6, 0.4)
    tableBoard.rotation.set(-0.1, 0.9, 0) 
    tableBoard.scale.set(4, 0.15, 4)

    tableLeg1.scale.set(0.1, 1.1, 0.1)
    tableLeg2.scale.set(0.1, 1.1, 0.1)
    tableLeg3.scale.set(0.1, 1.1, 0.1)
    tableLeg4.scale.set(0.1, 1.1, 0.1)

    const floor = () => {
        var meshFloor = new THREE.Mesh(
        new THREE.PlaneGeometry(100, 100, 100, 100),
        new THREE.MeshPhongMaterial({color:0xffffff, wireframe: false, antialias: true})
        )
        meshFloor.rotation.x -= Math.PI / 2;
        meshFloor.receiveShadow = true;
        scene.add(meshFloor);
    }

    const light = () => {
        var ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
        var light = new THREE.PointLight(0xffffff, 1.3, 18);
        light.position.set(1, 1, 1)
        light.castShadow = true
        light.shadow.camera.near = 0.7
        light.shadow.camera.far = 25
        light.position.set(0.3, 2, 2);
        scene.add(light, ambientLight);
}
    const render = () => {
        requestAnimationFrame(render);
        tableBoard.rotation.y += 0.005;
       /*  mesh.rotation.x += 0.01; */ 
        renderer.render(scene, camera);
    }

    light();
    floor();
    render();
   
    return (
        <div>
            {console.log(window.innerWidth)}
        </div>
    )

}
