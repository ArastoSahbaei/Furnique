import * as THREE from "three";
export default function SceneSubject(scene) {
	
    const geometry = new THREE.BoxGeometry(2, 2, 2);
    const material = new THREE.MeshPhongMaterial({color: 0x156289, emissive: 0x072534, side: THREE.DoubleSide, flatShading: true});
    const tableBoard = new THREE.Mesh(geometry, material)


/*     const render = () => {
        tableBoard.rotation.y -= 0.01;
    }

    render() */

}