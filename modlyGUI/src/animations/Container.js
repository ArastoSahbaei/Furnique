import React, {lazy} from 'react'
const Main = lazy(() => import('./Main'));
const Mainer = lazy(() => import('./hooks/example-cube/Main'));

export default function Container() {

return (
        <div className="containerWrapper">
              {/* <Main/> */}
              <Mainer/>
        </div>
      );
}