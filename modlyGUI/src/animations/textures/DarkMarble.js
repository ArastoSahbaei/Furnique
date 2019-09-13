import * as THREE from "three";
import DarkMarble from '../../shared/images/marble.jpg'

export default () => {
    const textureLoader = new THREE.TextureLoader();
    const darkMarble = textureLoader.load(DarkMarble);
    return darkMarble;
}