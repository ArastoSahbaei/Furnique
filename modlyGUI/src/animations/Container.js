import React, {setState} from 'react'
import Main from './Main'

export default function Container() {

    const [isMounted, setisMounted] = useState(true);

    return (
        <>
          <button
            onClick={() =>
              this.setState(state => ({ isMounted: !state.isMounted }))
            }
          >
            {isMounted ? "Unmount" : "Mount"}
          </button>
          {isMounted && <Main />}
          {isMounted && <div>Scroll to zoom, drag to rotate</div>}
        </>
      );
}
