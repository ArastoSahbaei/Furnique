import * as THREE from 'three';
import { useEffect } from 'react';
import { useThree } from '../ThreeJSManager';
import WoodTexture from '../../textures/Wood'

const TableSurface = props => {
    const {boxWidth = 1.5, boxDepth = 0.1, boxHeight = 1.5} = props;

    const setup = context => {
        const { scene } = context;
        const tableSurfaceGeometry = new THREE.BoxGeometry(boxWidth, boxDepth, boxHeight);
        const tableSurfaceMaterial = new THREE.MeshStandardMaterial({map: WoodTexture(), wireframe: false});
        const tableSurface = new THREE.Mesh(tableSurfaceGeometry, tableSurfaceMaterial);
        tableSurface.name = 'tableSurface'
        tableSurface.castShadow = true;
        scene.add(tableSurface);
        return tableSurface;
    };

    const { getEntity, timer } = useThree(setup);

    useEffect(() => {
        const tableSurface = getEntity();
      },
      [],
    );

    useEffect(() => {
        const cube = getEntity();
        const oscillator = Math.sin(timer / 1000) * Math.PI - Math.PI;
        cube.rotation.y += 0.01;
        cube.rotation.z += -0.01;
      },
      [timer],
    );

    return null;

};

export default TableSurface;