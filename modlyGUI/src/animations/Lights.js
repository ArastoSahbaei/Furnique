import * as THREE from "three";

export default function Lights(scene) {
    
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.75);
    const lightIntensity = 1.3; const lightDistance = 18;
    const light = new THREE.PointLight(0xffffff, lightIntensity, lightDistance);
    light.position.set(1, 1, 1)
    scene.add(light, ambientLight);
	
/* 	this.update = function(time) {
		light.intensity = (Math.sin(time)+1.5)/1.5;
		light.color.setHSL( Math.sin(time), 0.5, 0.5 );
	} */
}