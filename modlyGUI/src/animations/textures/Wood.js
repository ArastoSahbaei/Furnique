import * as THREE from "three";
import Marble from '../../shared/images/wood.jpg'

export default () => {
    const textureLoader = new THREE.TextureLoader();
    const wood = textureLoader.load(Marble);
    return wood;
}