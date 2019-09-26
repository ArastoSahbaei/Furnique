import React, {lazy} from 'react'
const Main = lazy(() => import('./Main'));

export default function Container() {

return (
        <div>
              <Main/>
        </div>
      );
}