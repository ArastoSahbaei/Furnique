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

    const tableLeg1 = this.scene.getObjectByName('tableLeg1');
    const tableLeg2 = this.scene.getObjectByName('tableLeg2');
    const tableLeg3 = this.scene.getObjectByName('tableLeg3');
    const tableLeg4 = this.scene.getObjectByName('tableLeg4');
    
    tableBoard.scale.x = this.title.TableWidth;
    tableBoard.scale.z = this.title.TableHeight;
    tableBoard.scale.y = this.title.TableDepth;

    tableLeg1.scale.x = this.title.LegsWidth;  tableLeg2.scale.x = this.title.LegsWidth;  tableLeg3.scale.x = this.title.LegsWidth;  tableLeg4.scale.x = this.title.LegsWidth;
    tableLeg1.scale.z = this.title.LegsHeight; tableLeg2.scale.z = this.title.LegsHeight; tableLeg3.scale.z = this.title.LegsHeight; tableLeg4.scale.z = this.title.LegsHeight;
    tableLeg1.scale.y = this.title.LegsDepth;  tableLeg2.scale.y = this.title.LegsDepth;  tableLeg3.scale.y = this.title.LegsDepth;  tableLeg4.scale.y = this.title.LegsDepth;

    tableLeg1.position.x = -this.title.LegPositionX; tableLeg2.position.x = this.title.LegPositionX; tableLeg3.position.x = -this.title.LegPositionX; tableLeg4.position.x = this.title.LegPositionX;
    tableLeg1.position.z = this.title.LegPositionZ; tableLeg2.position.z = -this.title.LegPositionZ; tableLeg3.position.z = -this.title.LegPositionZ; tableLeg4.position.z = this.title.LegPositionZ;

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
    this.TableWidth = 1.5;
    this.TableHeight = 1.5;
    this.TableDepth = 0.8;
    this.LegsWidth = 1;
    this.LegsHeight = 1;
    this.LegsDepth = 1;
    this.LegPositionX = 0.65;
    this.LegPositionZ = 0.65;
    this.RotationSpeed = 0.005;
}
    this.title = new controls();
    this.surface = this.gui.addFolder('Surface')
    this.surface.add(this.title, 'TableWidth', 0.5, 3);
    this.surface.add(this.title, 'TableHeight', 0.5, 3);
    this.surface.add(this.title, 'TableDepth', 0.5, 1);

    this.legs = this.gui.addFolder('Legs')
    this.legs.add(this.title, 'LegsWidth', 1, 3);
    this.legs.add(this.title, 'LegsHeight', 1, 3);
    this.legs.add(this.title, 'LegsDepth', 0.1, 3);
    this.legs.add(this.title, 'LegPositionX', 0.5, 0.67);
    this.legs.add(this.title, 'LegPositionZ', 0.5, 0.67);

    this.gui.add(this.title, 'RotationSpeed', 0.0, 0.1);

    
  }

  render() {
    return <div style={style} ref={ref => (this.el = ref)} />;
  }
}