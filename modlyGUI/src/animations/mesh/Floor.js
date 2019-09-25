import * as THREE from "three";

export default ({ scene }) => {

const floorWidh = 200; 
const floorHeight = 200; 
const floorWidthSegments = 100; 
const floorHeightSegments = 100;

const floorGeometry = new THREE.PlaneGeometry( floorWidh, floorHeight, floorWidthSegments, floorHeightSegments );
floorGeometry.rotateX( Math.PI / 2 );
const floorMaterial = new THREE.MeshStandardMaterial({color: 0xCECECE, side: THREE.DoubleSide, wireframe: false}),

floor = new THREE.Mesh( floorGeometry, floorMaterial );
floor.receiveShadow = true;

scene.add(floor);

}