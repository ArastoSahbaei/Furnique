import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import addMesh from './Mesh'
import addMesh2 from './Mesh2'
import addLights from './Lights'
import * as dat from 'dat.gui';

const style = {
  height: 740
};

export default class Main extends Component {
  
  componentDidMount() {
    this.sceneSetup();
   /*  addMesh({ scene: this.scene, cube: this.cube });  */
    addMesh2({ scene: this.scene }); 
    addLights({ scene: this.scene });
    this.userGUI();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.controls.dispose();
  }

  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.z = 5;
    this.controls = new OrbitControls(this.camera, this.el);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(width, height);
    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };

  startAnimationLoop = () => {
    const tableBoard = this.scene.getObjectByName('tableSurface');
    tableBoard.rotation.y += this.title.RotationSpeed;
    tableBoard.scale.x = this.title.TableWidth;
    tableBoard.scale.z = this.title.TableHeight;
    tableBoard.scale.y = this.title.TableDepth;

    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

   userGUI = () => {
    this.gui = new dat.GUI();
    const controls = function() {
    this.TableWidth = 1;
    this.TableHeight = 1;
    this.TableDepth = 1;
    this.RotationSpeed = 0.005;
}
    this.title = new controls();
    this.surface = this.gui.addFolder('Surface')
    this.surface.add(this.title, 'TableWidth', 1, 3);
    this.surface.add(this.title, 'TableHeight', 1, 3);
    this.surface.add(this.title, 'TableDepth', 1, 3);
    this.gui.add(this.title, 'RotationSpeed', 0.005, 0.1);
  }

  render() {
    return <div style={style} ref={ref => (this.el = ref)} />;
  }
}