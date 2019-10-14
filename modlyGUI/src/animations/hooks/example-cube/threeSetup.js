import * as THREE from 'three';
import FloorTexture from '../../textures/FloorTexture'
import WallTexture from '../../textures/WallTexture'

export const getCamera = ({ offsetWidth, offsetHeight }) => {
  const camera = new THREE.PerspectiveCamera(75, offsetWidth / offsetHeight, 0.1, 1000);
  camera.position.set(0, 2, 3);
  return camera;
};

export const getRenderer = canvas => {
  const context = canvas.getContext('webgl');
  const renderer = new THREE.WebGLRenderer({antialias: true, canvas, context});
  renderer.setSize(canvas.offsetWidth, canvas.offsetHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  return renderer;
};

export const getScene = () => {
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0xFFFFFF);
  scene.fog = new THREE.FogExp2(0xcccccc, 0.002);

  const light = new THREE.SpotLight(0xffffff, 1, 750, 1);
  light.position.set(0, 30, 0);
  light.rotation.z = (90 * Math.PI) / 180;
  scene.add(light);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.5);
  directionalLight.position.set(6, 20, 20)
  directionalLight.castShadow = true;
  directionalLight.shadow.mapSize.width = 1024;  //Change to 8192 for production
  directionalLight.shadow.mapSize.height = 1024; //Change to 8192 for production   
  scene.add(directionalLight);

  const floorGeometry = new THREE.PlaneBufferGeometry(100, 30, 32, 32);
  const floorMaterial = new THREE.MeshPhongMaterial({ map: FloorTexture() });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);

  floor.rotation.x = (-90 * Math.PI) / 180;
  floor.receiveShadow = true;
  floor.position.set(0, 0, 10)
  scene.add(floor);

  const wallGeometry = new THREE.PlaneGeometry( 100, 30, 32, 32 );
  const wallMaterial = new THREE.MeshPhongMaterial({map: WallTexture(), wireframe: false}),
  wall = new THREE.Mesh( wallGeometry, wallMaterial );
  wall.receiveShadow = false;
  wall.position.set(0, 15, -3);
  scene.add(wall)

  return scene;
};
