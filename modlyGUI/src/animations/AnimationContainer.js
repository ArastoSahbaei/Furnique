import React, {lazy} from 'react'
import './AnimationContainer.css'
const Mainer = lazy(() => import('./firstmodel/Main'));

export default function Container() {

return (
        <div className="containerWrapper">
              <Mainer/>
        </div>
      );
}