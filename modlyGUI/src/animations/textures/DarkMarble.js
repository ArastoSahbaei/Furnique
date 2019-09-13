import * as THREE from "three";
import Marble from '../../shared/images/marble.jpg'

export default () => {
    const textureLoader = new THREE.TextureLoader();
    const darkMarble = textureLoader.load(Marble);
    return darkMarble;
}