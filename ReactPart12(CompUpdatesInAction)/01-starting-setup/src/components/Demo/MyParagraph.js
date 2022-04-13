import React from 'react';

function MyParagraph(props) {
    console.log('Paragraph Output Running');
    return (
        <p>{props.children}</p>
    );

}
export default MyParagraph;