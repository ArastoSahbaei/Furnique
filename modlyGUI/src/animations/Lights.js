import * as THREE from "three";

export default ({ scene }) => {
    const lights = [];
    lights[0] = new THREE.PointLight(0xffffff, 1, 0);
    lights[1] = new THREE.PointLight(0xffffff, 1, 0);
    lights[2] = new THREE.PointLight(0xffffff, 1, 0);
/*     var spotLight_02 = new THREE.SpotLight(0xffffff, 1) */;
    const spotLight_01 = new THREE.SpotLight(0xffffff, 0.5);

    lights[0].position.set(0, 200, 0);
    lights[1].position.set(100, 200, 100);
    lights[2].position.set(-100, -200, -100);
    
    spotLight_01.castShadow = true;
    spotLight_01.shadow.mapSize.width = 8192;
    spotLight_01.shadow.mapSize.height = 8192;
    
/*  spotLight_02.castShadow = true;
    spotLight_02.shadow.mapSize.width = 8192;
    spotLight_02.shadow.mapSize.height = 8192; */

    spotLight_01.position.x = 6;
    spotLight_01.position.y = 8;
    spotLight_01.position.z = -20;
    spotLight_01.name = 'spotLight_01';
/*     spotLight_02.position.x = -12;
    spotLight_02.position.y = 6;
    spotLight_02.position.z = -10; */

    scene.add(lights[0], lights[1], lights[2], spotLight_01);
  }