import * as THREE from "three";
import textureLoader from '../../shared/images/floorTest.jpg'

export default () => {
    const floorTexture = new THREE.TextureLoader().load(textureLoader);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set( 120, 40 );
    return floorTexture;
}