import * as THREE from "three";
import Wood from '../../shared/images/wood.jpg'

export default () => {
    const textureLoader = new THREE.TextureLoader();
    const wood = textureLoader.load(Wood);
    return wood;
}