import * as THREE from "three";

export default ({ scene, cube}) => {
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({color: 0x156289, emissive: 
    0x072534, side: THREE.DoubleSide, flatShading: true, wireframe: false});
    cube = new THREE.Mesh(geometry, material);
    scene.add(cube);
    
  }