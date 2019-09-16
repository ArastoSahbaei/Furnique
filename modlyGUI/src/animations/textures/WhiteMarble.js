import * as THREE from "three";
import WhiteMarble from '../../shared/images/whiiteMarble.jpg'

export default () => {
    const textureLoader = new THREE.TextureLoader();
    const whiteMarble = textureLoader.load(WhiteMarble);
    return whiteMarble;
}