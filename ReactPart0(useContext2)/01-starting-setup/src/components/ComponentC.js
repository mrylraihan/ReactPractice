import React from 'react';
import ComponentE from './ComponentE'
import ComponentF from './ComponentF';

function ComponentC() {
    return <>
    <ComponentE />;
        <ComponentF />
    </>
}

export default ComponentC;