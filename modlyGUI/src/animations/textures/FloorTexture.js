import * as THREE from "three";
import textureLoader from '../../shared/images/tiles.jpg'

export default () => {
    const floorTexture = new THREE.TextureLoader().load(textureLoader);
    floorTexture.wrapS = THREE.RepeatWrapping;
    floorTexture.wrapT = THREE.RepeatWrapping;
    floorTexture.repeat.set( 60, 20 );
    return floorTexture;
}