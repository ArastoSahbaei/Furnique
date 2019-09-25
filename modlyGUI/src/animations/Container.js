import React, {lazy} from 'react'
import AddToCartButton from './addToCartButton/AddToCartButton'
const Main = lazy(() => import('./Main'));

export default function Container() {

return (
        <div>
              <Main/>
              <AddToCartButton/>
        </div>
      );
}