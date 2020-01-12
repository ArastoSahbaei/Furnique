import * as THREE from 'three';
import { useEffect } from 'react';
import { useThree } from '../../ThreeJSManager';
import WoodTexture from '../../textures/Wood'

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
        const { rotationSpeed, tableWidth, tableLength, tableHeight, legWidth, legLength, legHeight, legAxisX, legAxisY } = props.cartObject;
        const table = getEntity();
        console.log(props)
        table[0].rotation.y += -rotationSpeed;
        table[0].scale.x = tableWidth;
        table[0].scale.z = tableLength;
        table[0].scale.y = tableHeight;

        table[1].scale.x = legWidth; table[2].scale.x = legWidth; table[3].scale.x = legWidth; table[4].scale.x = legWidth;
        table[1].scale.z = legLength; table[2].scale.z = legLength; table[3].scale.z = legLength; table[4].scale.z = legLength;
        table[1].scale.y = legHeight;  table[2].scale.y = legHeight;  table[3].scale.y = legHeight;  table[4].scale.y = legHeight;

        table[1].position.x = -legAxisX; 
        table[2].position.x = -legAxisX; 
        table[3].position.x = legAxisX; 
        table[4].position.x = legAxisX;

        table[1].position.z = -legAxisY; 
        table[2].position.z = legAxisY; 
        table[3].position.z = legAxisY; 
        table[4].position.z = -legAxisY; 
        
        table[0].position.y =  legHeight * 0.12;
        table[1].position.y = -legHeight * 0.65;
        table[2].position.y = -legHeight * 0.65;
        table[3].position.y = -legHeight * 0.65;
        table[4].position.y = -legHeight * 0.65;

      },
      [timer],
    );

    return null;

};

export default TableSurface;