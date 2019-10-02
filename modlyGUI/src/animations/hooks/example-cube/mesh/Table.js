import * as THREE from 'three';
import { useEffect } from 'react';
import { useThree } from '../../ThreeJSManager';
import WoodTexture from '../../../textures/Wood'

const TableSurface = props => {
    const {boxWidth = 1.5, boxDepth = 0.1, boxHeight = 1.5} = props;

    const setup = context => {
        const { scene } = context;
        const tableSurfaceGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
        const tableSurfaceMaterial = new THREE.MeshStandardMaterial({map: WoodTexture(), wireframe: false});
        const tableSurface = new THREE.Mesh(tableSurfaceGeometry, tableSurfaceMaterial);
        tableSurface.castShadow = true;

        const tableLegsGeometry = new THREE.BoxGeometry(0.05, 1.3, 0.05);
        const tableLegsMaterial = new THREE.MeshStandardMaterial(({map: WoodTexture(), wireframe: false}));
        const tableLeg1 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); 
        const tableLeg2 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); 
        const tableLeg3 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial); 
        const tableLeg4 = new THREE.Mesh(tableLegsGeometry, tableLegsMaterial);

        tableSurface.add(tableLeg1, tableLeg2, tableLeg3, tableLeg4);
        scene.add(tableSurface);
        return [tableSurface, tableLeg1, tableLeg2, tableLeg3, tableLeg4]; //TODO: This is the cause of the 'show table' bug
    };


    const { getEntity, timer } = useThree(setup);

    useEffect(() => {
        const table = getEntity();

        table[0].rotation.y += -props.cartObject.rotationSpeed;
        table[0].scale.x = props.cartObject.bordsBredd;
        table[0].scale.z = props.cartObject.Bordslängd;
        table[0].scale.y = props.cartObject.Bordsdjup

        table[1].scale.x = props.cartObject.BenBredd; table[2].scale.x = props.cartObject.BenBredd; table[3].scale.x = props.cartObject.BenBredd; table[4].scale.x = props.cartObject.BenBredd;
        table[1].scale.z = props.cartObject.BenLängd; table[2].scale.z = props.cartObject.BenLängd; table[3].scale.z = props.cartObject.BenLängd; table[4].scale.z = props.cartObject.BenLängd;
        table[1].scale.y = props.cartObject.BenHöjd;  table[2].scale.y = props.cartObject.BenHöjd;  table[3].scale.y = props.cartObject.BenHöjd;  table[4].scale.y = props.cartObject.BenHöjd;

        table[1].position.x = -props.cartObject.BenPositionX; 
        table[2].position.x = -props.cartObject.BenPositionX; 
        table[3].position.x = props.cartObject.BenPositionX; 
        table[4].position.x = props.cartObject.BenPositionX;

        table[1].position.z = -props.cartObject.BenPositionY; 
        table[2].position.z = props.cartObject.BenPositionY; 
        table[3].position.z = props.cartObject.BenPositionY; 
        table[4].position.z = -props.cartObject.BenPositionY; 
        
        table[0].position.y =  props.cartObject.BenHöjd * 0.65;
        table[1].position.y = -props.cartObject.BenHöjd * 0.65;
        table[2].position.y = -props.cartObject.BenHöjd * 0.65;
        table[3].position.y = -props.cartObject.BenHöjd * 0.65;
        table[4].position.y = -props.cartObject.BenHöjd * 0.65;

      },
      [timer],
    );

    return null;

};

export default TableSurface;