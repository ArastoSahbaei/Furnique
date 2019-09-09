import React from 'react'
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";

const style = {
    height: 680 // we can control scene size by setting container dimensions
  };

export default function Prio() {

    const one = sceneSetup();
    const two = addCustomSceneObjects();
    const three = addLights();
    const four = startAnimationLoop()

    function sceneSetup() {
        
    }

    function addCustomSceneObjects() {

    }

    function addLights() {

    }

    function startAnimationLoop() {

    }

    function handleWindowResize {

    }



    return (
        <div>
            <h1>haha</h1>
        </div>
    )
}
