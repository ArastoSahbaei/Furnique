import React from 'react'
import * as THREE from "three";
import SceneSubject from './SceneSubject'
import Lights from './Lights'

export default function SceneSetup(canvas) {

/*     const screenDimensions = {
        width: canvas.width,
        height: canvas.height
    } */

    const scene = buildScene();
    const camera = buildCamera();
    const renderer = buildRender(); 
    const sceneSubjects = new createSceneSubjects(scene);
    const idk = update()

    function buildScene() {
        const scene = new THREE.Scene();
        scene.background = new THREE.Color("#000");

        return scene;
    }

    function buildRender() {
        const renderer = new THREE.WebGLRenderer({antialias: true});
        renderer.setClearColor(0xb7d6fb); 
        renderer.setSize(window.innerWidth, window.innerHeight)
        renderer.setPixelRatio(window.devicePixelRatio)
        document.body.append(renderer.domElement);
    
        window.addEventListener('resize', () => {
            renderer.setSize(window.innerWidth, window.innerHeight);
            camera.aspect = window.innerWidth / window.innerHeight;
            camera.updateProjectionMatrix();
        }) 

        return renderer;
    }

    function buildCamera() {
        const aspectRatio = (window.innerWidth / window.innerHeight);
        const fieldOfView = 35;
        const nearPlane = 0.1;
        const farPlane = 1000; 
        const camera = new THREE.PerspectiveCamera(fieldOfView, aspectRatio, nearPlane, farPlane);
        camera.position.z = 8;
        camera.position.y = 2;
        camera.lookAt( scene.position );

        return camera;
    }

/*     const renderer = new THREE.WebGLRenderer({antialias: true});
    renderer.setClearColor(0xb7d6fb); 
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(window.devicePixelRatio)
    document.body.append(renderer.domElement);

    window.addEventListener('resize', () => {
        renderer.setSize(window.innerWidth, window.innerHeight);
        camera.aspect = window.innerWidth / window.innerHeight;
        camera.updateProjectionMatrix();
    })  */

   

    function createSceneSubjects(scene) { /*remove parameter? */
        const sceneSubjects = [ 
            new SceneSubject(scene), 
            new Lights(scene)
        ];
        return sceneSubjects /* can be removed? */
    }

    function update() {
    renderer.render(scene, camera);
    }

    return (
        <div>
        </div>
    )
}
 