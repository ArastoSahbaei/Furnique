import React, {setState, useState} from 'react'
import Main from './Main'

export default function Container() {

    const [isMounted, setisMounted] = useState(true);

    return (
        <>
{/*        <button
            onClick={() => setisMounted( {isMounted} == !isMounted )}> {isMounted ? "Unmount" : "Mount"}
          </button> */}
          {isMounted && <Main />}
        </>
      );
}
