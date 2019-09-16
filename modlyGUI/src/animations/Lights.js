import * as THREE from "three";

export default ({ scene }) => {

    const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
    const hemiSphereLight = new THREE.HemisphereLight(  0xffffff, 1.0 ); 
    const ambientLight = new THREE.AmbientLight( 0xffffff, 1.0 );
    
    directionalLight.castShadow = true;
    directionalLight.shadow.mapSize.width = 1024; //Change to 8192 for production
    directionalLight.shadow.mapSize.height = 1024;
    
    directionalLight.position.x = 6;
    directionalLight.position.y = 20;
    directionalLight.position.z = 20;
    directionalLight.name = 'directionalLight';


    scene.add(directionalLight, hemiSphereLight, ambientLight);
  }