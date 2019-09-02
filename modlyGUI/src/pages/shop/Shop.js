import React from 'react'
import './Shop.css'
import * as THREE from "three";
import {Lol} from '../../shared/images/denne.jpg'


export default function Shop() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    camera.position.z = 8;
    camera.position.y = 2;

    var renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor("#e5e5e5");
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
    
    var loader = new THREE.TextureLoader();
    var material = new THREE.MeshLambertMaterial({ map: loader.load('https://threejsfundamentals.org/threejs/resources/images/wall.jpg') })
    var mesh = new THREE.Mesh(geometry, material)
    scene.add(mesh);

    mesh.position.set(0, 1, 1)
   /*  mesh.rotation.set(3, 1, 3) */
    mesh.scale.set(4, 0.15, 4)

    var light = new THREE.DirectionalLight(0xe0e0e0, 1.5, 50);

    light.position.set(0.3, 2, 2);
    scene.add(light);

    var render = function() {
        requestAnimationFrame(render);
        mesh.rotation.y += 0.003;
        renderer.render(scene, camera);
    }

    render();
   
    return (
        <div>
        </div>
    )

}
