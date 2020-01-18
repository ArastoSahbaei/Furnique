import * as THREE from "three";
import Oak from '../../shared/images/oak.jpeg'

export default () => {
    const textureLoader = new THREE.TextureLoader();
    const oak = textureLoader.load(Oak);
    return oak;
}