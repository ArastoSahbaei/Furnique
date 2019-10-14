import * as THREE from 'three';

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
  light.position.set(0, 50, 0);
  light.rotation.z = (90 * Math.PI) / 180;
  scene.add(light);

  const floorGeometry = new THREE.PlaneBufferGeometry(100, 100, 32, 32);
  const floorMaterial = new THREE.MeshPhongMaterial({ color: 0xFFFFFF });
  const floor = new THREE.Mesh(floorGeometry, floorMaterial);

  floor.rotation.x = (-90 * Math.PI) / 180;
  floor.receiveShadow = true;
  scene.add(floor);

  const wallGeometry = new THREE.PlaneGeometry( 600, 140, 100, 100 );
  const wallMaterial = new THREE.MeshStandardMaterial({color: 0xCECECE, side: THREE.DoubleSide, wireframe: false}),
  wall = new THREE.Mesh( wallGeometry, wallMaterial );
  wall.receiveShadow = false;

  wall.position.set(0, 12, -4);
  scene.add(wall)

  return scene;
};
