import * as THREE from "three";
import textureLoader from '../../shared/images/whiiteMarble.jpg'

export default () => {
    const wallTexture = new THREE.TextureLoader().load(textureLoader);
    wallTexture.wrapS = THREE.RepeatWrapping;
    wallTexture.wrapT = THREE.RepeatWrapping;
    wallTexture.repeat.set( 20, 20 );
    return wallTexture;
}