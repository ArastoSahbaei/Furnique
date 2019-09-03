import React from 'react'
import * as THREE from "three";



export default function Floor() {
    const floor = function() {
        var meshFloor = new THREE.Mesh(
            new THREE.PlaneGeometry(10, 10, 10, 10),
            new THREE.MeshPhongMaterial({color:0xffffff, wireframe: false})
        )
        meshFloor.rotation.x -= Math.PI / 2;
        meshFloor.receiveShadow = true;
        }

        return(
            <h1>LOL</h1>
        )
    }
