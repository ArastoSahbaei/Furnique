import React, { Component } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls";
import addMesh from './mesh/Mesh'
import addWallMesh from './mesh/Walls'
import addMesh2 from './mesh/Mesh2'
import addLights from './Lights'
import * as dat from 'dat.gui';

const style = {
  height: 740
};

export default class Main extends Component {
  
componentDidMount() {
    this.sceneSetup();
   /*  addMesh({ scene: this.scene, cube: this.cube });  */
    addWallMesh({ scene: this.scene })
    addMesh2({ scene: this.scene }); 
    addLights({ scene: this.scene });
    this.userGUI();
    this.startAnimationLoop();
    window.addEventListener("resize", this.handleWindowResize);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.handleWindowResize);
    window.cancelAnimationFrame(this.requestID);
    this.gui.destroy();
    this.controls.dispose();
  }

  sceneSetup = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;

    this.scene = new THREE.Scene();
    this.camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    this.camera.position.x = 0; this.camera.position.y = 5; this.camera.position.z = 10;
    this.camera.lookAt(0, 0, 0);
/*     this.helper = new THREE.CameraHelper( this.camera );
    this.scene.add( this.helper ); */
    this.controls = new OrbitControls(this.camera, this.el);
    this.renderer = new THREE.WebGLRenderer({antialias: true});
    this.renderer.setSize(width, height);
    this.renderer.shadowMap.enabled = true;
    this.renderer.shadowMapType = THREE.PCFShadowMap;
    this.el.appendChild(this.renderer.domElement); // mount using React ref
  };

  handleWindowResize = () => {
    const width = this.el.clientWidth;
    const height = this.el.clientHeight;
    this.renderer.setSize(width, height);
    this.camera.aspect = width / height;
    this.camera.updateProjectionMatrix();
  };

  startAnimationLoop = () => {
    const tableBoard = this.scene.getObjectByName('tableSurface');
    tableBoard.rotation.y += this.title.RotationSpeed;
    tableBoard.scale.x = this.title.TableWidth;
    tableBoard.scale.z = this.title.TableHeight;
    tableBoard.scale.y = this.title.TableDepth;

    const tableLeg1 = this.scene.getObjectByName('tableLeg1');const tableLeg2 = this.scene.getObjectByName('tableLeg2');const tableLeg3 = this.scene.getObjectByName('tableLeg3');const tableLeg4 = this.scene.getObjectByName('tableLeg4');
    tableLeg1.scale.x = this.title.LegsWidth;  tableLeg2.scale.x = this.title.LegsWidth;  tableLeg3.scale.x = this.title.LegsWidth;  tableLeg4.scale.x = this.title.LegsWidth;
    tableLeg1.scale.z = this.title.LegsHeight; tableLeg2.scale.z = this.title.LegsHeight; tableLeg3.scale.z = this.title.LegsHeight; tableLeg4.scale.z = this.title.LegsHeight;
    tableLeg1.scale.y = this.title.LegsDepth;  tableLeg2.scale.y = this.title.LegsDepth;  tableLeg3.scale.y = this.title.LegsDepth;  tableLeg4.scale.y = this.title.LegsDepth;

    tableLeg1.position.x = -this.title.LegPositionX; tableLeg2.position.x = this.title.LegPositionX; tableLeg3.position.x = -this.title.LegPositionX; tableLeg4.position.x = this.title.LegPositionX;
    tableLeg1.position.z = this.title.LegPositionZ; tableLeg2.position.z = -this.title.LegPositionZ; tableLeg3.position.z = -this.title.LegPositionZ; tableLeg4.position.z = this.title.LegPositionZ;
    
    tableBoard.position.y = this.title.LegsDepth * 0.66;
    tableLeg1.position.y = -this.title.LegsDepth * 0.66; 
    tableLeg2.position.y = -this.title.LegsDepth * 0.66; 
    tableLeg3.position.y = -this.title.LegsDepth * 0.66; 
    tableLeg4.position.y = -this.title.LegsDepth * 0.66; 

    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  userGUI = () => {
    this.gui = new dat.GUI();
    const controls = function() {
    this.TableWidth = 1.5;
    this.TableHeight = 1.5;
    this.TableDepth = 0.6;
    this.LegsWidth = 2;
    this.LegsHeight = 2;
    this.LegsDepth = 1.3;
    this.LegPositionX = 0.65;
    this.LegPositionZ = 0.65;
    this.LegPositionY = 1.65;
    this.RotationSpeed = 0.00;
}

    this.title = new controls();
    this.surface = this.gui.addFolder('Surface')
    this.surface.add(this.title, 'TableWidth', 0.5, 3);
    this.surface.add(this.title, 'TableHeight', 0.5, 3);
    this.surface.add(this.title, 'TableDepth', 0.5, 2);

    this.legs = this.gui.addFolder('Legs')
    this.legs.add(this.title, 'LegsWidth', 1, 3);
    this.legs.add(this.title, 'LegsHeight', 1, 3);
    this.legs.add(this.title, 'LegsDepth', 0.1, 2);
    this.legs.add(this.title, 'LegPositionX', 0.5, 0.67);
    this.legs.add(this.title, 'LegPositionZ', 0.5, 0.67);
    this.legs.add(this.title, 'LegPositionY', 0.5, 1.67);

    this.gui.add(this.title, 'RotationSpeed', 0.0, 0.025);
  }

  render() {
    return <div style={style} ref={ref => (this.el = ref)} />;
      }
}