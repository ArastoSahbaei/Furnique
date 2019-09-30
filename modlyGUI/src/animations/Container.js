import React, {lazy} from 'react'
const Main = lazy(() => import('./Main'));
const Mainer = lazy(() => import('./hooks/example-cube/CubeExample'));

export default function Container() {

return (
        <div>
              {/* <Main/> */}
              <Mainer/>
        </div>
      );
}