import React from 'react'
import './Shop.css'
import * as THREE from "three";


export default function Shop() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, (window.innerWidth / window.innerHeight), 0.1, 1000);
    camera.position.z = 8;
    camera.position.y = 2;
    camera.lookAt( scene.position )

    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0x7c7d81);
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.append(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })

    const boxWidth = 2;
    const boxHeight = 1;
    const boxDepth = 1;
    const geometry = new THREE.BoxGeometry(boxWidth, boxHeight, boxDepth);
    const tableLegs = new THREE.BoxGeometry(0.3, 10, 0.3);
    var loader = new THREE.TextureLoader();
    var material = new THREE.MeshLambertMaterial({ map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg') })
    var tableMaterial = new THREE.MeshLambertMaterial({ map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg'), shininess: 50, shading: THREE.SmoothShading })
    var mesh = new THREE.Mesh(geometry, material)
    var tableLeg1 = new THREE.Mesh(tableLegs, tableMaterial)
    var tableLeg2 = new THREE.Mesh(tableLegs, tableMaterial)
    var tableLeg3 = new THREE.Mesh(tableLegs, tableMaterial)
    var tableLeg4 = new THREE.Mesh(tableLegs, tableMaterial)
    
        var group = new THREE.Group();
        mesh.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
        scene.add(mesh);
    
    mesh.position.set(0, 1.15, 1)
    tableLeg1.position.set(0.9, -5, -0.4)
    tableLeg2.position.set(-0.9, -5, -0.4)
    tableLeg3.position.set(-0.9, -5, 0.4)
    tableLeg4.position.set(0.9, -5, 0.4)
   /*  mesh.rotation.set(3, 1, 3) */
    mesh.scale.set(4, 0.15, 4)
    tableLeg1.scale.set(0.1, 1.1, 0.1)
    tableLeg2.scale.set(0.1, 1.1, 0.1)
    tableLeg3.scale.set(0.1, 1.1, 0.1)
    tableLeg4.scale.set(0.1, 1.1, 0.1)


    var light = new THREE.DirectionalLight(0xe0e0e0, 1.5, 50);

    light.position.set(0.3, 2, 2);
    scene.add(light);

    var render = function() {
        requestAnimationFrame(render);
        mesh.rotation.y += 0.01;
        mesh.rotation.x += 0.01;
  
        renderer.render(scene, camera);
    }


    render();
   
    return (
        <div>
            {console.log(window.innerWidth)}
        </div>
    )

}
