import * as THREE from "three";
import WhiteMarble from '../textures/WhiteMarble'

export default ({ scene }) => {

const wallWidh = 600; const wallHeight = 30; const wallWidthSegments = 100; const wallHeightSegments = 100;
    const wallGeometry = new THREE.PlaneGeometry( wallWidh, wallHeight, wallWidthSegments, wallHeightSegments );
    const wallMaterial = new THREE.MeshStandardMaterial({map: WhiteMarble(), side: THREE.DoubleSide, wireframe: false}),
    wall = new THREE.Mesh( wallGeometry, wallMaterial );
    wall.receiveShadow = false;

    wall.position.set(0, 12, -6);
    scene.add(wall)

}