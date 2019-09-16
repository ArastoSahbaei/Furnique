import * as THREE from "three";
import Tee from '../textures/DarkMarble'

export default ({ scene, cube }) => {

const wallWidh = 600; const wallHeight = 30; const wallWidthSegments = 100; const wallHeightSegments = 100;
    const wallGeometry = new THREE.PlaneGeometry( wallWidh, wallHeight, wallWidthSegments, wallHeightSegments );
    const wallMaterial = new THREE.MeshStandardMaterial({color: 0xFFFFFF, side: THREE.DoubleSide, wireframe: false}),
    wall = new THREE.Mesh( wallGeometry, wallMaterial );
/*     wallGeometry.rotateX( Math.PI / 2 ); */
    wall.position.set(0, 12, -4);
    scene.add(wall)

}