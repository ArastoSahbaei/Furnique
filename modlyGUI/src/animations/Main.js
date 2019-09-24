import React, { Component } from "react"
import * as THREE from "three"
import './Main.css'
import { OrbitControls } from "three/examples/jsm/controls/OrbitControls"
import texture1 from './textures/DarkMarble'
import texture2 from './textures/WhiteMarble'
import addFloor from './mesh/Floor'
import addWallMesh from './mesh/Wall'
import addTable from './mesh/Table'
import addLights from './lightning/Lights'
import * as dat from 'dat.gui'

const style = {
  height: 740,
  width: 740
};

export default class Main extends Component {
  
  componentDidMount() {
    this.sceneSetup();
    addLights({ scene: this.scene });
    addWallMesh({ scene: this.scene })
    addFloor({ scene: this.scene })
    addTable({ scene: this.scene }); 
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
    this.camera.position.x = 0; this.camera.position.y = 2; this.camera.position.z = 3;
/*     this.helper = new THREE.CameraHelper( this.camera );
    this.scene.add( this.helper );  */
    this.controls = new OrbitControls(this.camera, this.el);
    this.renderer = new THREE.WebGLRenderer({antialias: true, alpha: true});
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
    const tableSurface = this.scene.getObjectByName('tableSurface');
    tableSurface.rotation.y += this.title.Rotation;
    tableSurface.scale.x = this.title.Bordsbredd;
    tableSurface.scale.z = this.title.Bordslängd;
    tableSurface.scale.y = this.title.Bordsdjup;

    const tableLeg1 = this.scene.getObjectByName('tableLeg1');const tableLeg2 = this.scene.getObjectByName('tableLeg2');const tableLeg3 = this.scene.getObjectByName('tableLeg3');const tableLeg4 = this.scene.getObjectByName('tableLeg4');
    tableLeg1.scale.x = this.title.BenBredd;  tableLeg2.scale.x = this.title.BenBredd;  tableLeg3.scale.x = this.title.BenBredd;  tableLeg4.scale.x = this.title.BenBredd;
    tableLeg1.scale.z = this.title.BenLängd; tableLeg2.scale.z = this.title.BenLängd; tableLeg3.scale.z = this.title.BenLängd; tableLeg4.scale.z = this.title.BenLängd;
    tableLeg1.scale.y = this.title.BenHöjd;  tableLeg2.scale.y = this.title.BenHöjd;  tableLeg3.scale.y = this.title.BenHöjd;  tableLeg4.scale.y = this.title.BenHöjd;

    tableLeg1.position.x = -this.title.BenPositionX; tableLeg2.position.x = this.title.BenPositionX; tableLeg3.position.x = -this.title.BenPositionX; tableLeg4.position.x = this.title.BenPositionX;
    tableLeg1.position.z = this.title.BenPositionY; tableLeg2.position.z = -this.title.BenPositionY; tableLeg3.position.z = -this.title.BenPositionY; tableLeg4.position.z = this.title.BenPositionY;
    
    tableSurface.position.y = this.title.BenHöjd * 0.65;
    tableLeg1.position.y = -this.title.BenHöjd * 0.65; 
    tableLeg2.position.y = -this.title.BenHöjd * 0.65; 
    tableLeg3.position.y = -this.title.BenHöjd * 0.65; 
    tableLeg4.position.y = -this.title.BenHöjd * 0.65; 

    this.renderer.render(this.scene, this.camera);
    this.requestID = window.requestAnimationFrame(this.startAnimationLoop);
  };

  userGUI = () => {
    const getTableSurface = this.scene.getObjectByName('tableSurface');
    const params = [texture1(), texture2()]
    
    const update = {
      updateMaterial: function() { getTableSurface.material.map = params[0]; }
    }

    this.gui = new dat.GUI();
    const controls = function() {
    this.Bordsbredd = 1.5;
    this.Bordslängd = 1.5;
    this.Bordsdjup = 0.6;
    this.BenBredd = 2;
    this.BenLängd = 2;
    this.BenHöjd = 1.3;
    this.BenPositionX = 0.65;
    this.BenPositionY = 0.65;
    this.Rotation = 0.001;
}

    this.title = new controls();
    this.surface = this.gui.addFolder('Yta')

    this.surface.add(this.title, 'Bordsbredd', 0.5, 3);
    this.surface.add(this.title, 'Bordslängd', 0.5, 3);
    this.surface.add(this.title, 'Bordsdjup', 0.5, 2);

    this.legs = this.gui.addFolder('Ben')
    this.legs.add(this.title, 'BenBredd', 1, 3);
    this.legs.add(this.title, 'BenLängd', 1, 3);
    this.legs.add(this.title, 'BenHöjd', 0.1, 2);
    this.legs.add(this.title, 'BenPositionX', 0.5, 0.67);
    this.legs.add(this.title, 'BenPositionY', 0.5, 0.67);

    this.gui.add(this.title, 'Rotation', 0.0, 0.01);
    this.gui.add(update, 'updateMaterial')
  }

  render() {
    return <div style={style} ref={ref => (this.el = ref)} />;
      }
}