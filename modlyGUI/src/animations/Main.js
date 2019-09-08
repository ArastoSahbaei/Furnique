import React from 'react'
import SceneUpdate from './SceneSetup'

export default function Main() {

    render();
    
    function render() {
        requestAnimationFrame(render);
    }

    return (
        <div>
            <SceneUpdate/>
        </div>
    )
}
