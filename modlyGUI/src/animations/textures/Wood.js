import * as THREE from "three";
import Wood from '../../shared/images/tree.jpg'

export default () => {
    const textureLoader = new THREE.TextureLoader();
    const wood = textureLoader.load(Wood);
    return wood;
}