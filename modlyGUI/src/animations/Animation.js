import React from 'react'
import './Animation.css'
import * as THREE from "three";

export default function Animation() {

    var scene = new THREE.Scene();
    var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );
    var renderer = new THREE.WebGLRenderer();
    renderer.setSize( window.innerWidth, window.innerHeight );
    document.body.appendChild( renderer.domElement );

    return (
        <div>
            
            <h1>What's up fool?</h1>
        </div>
    )
}
