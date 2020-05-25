import React from 'react';
import lib from '../../../lib/lib';

export default function PageContent(props){
    return(
        <section style={styles.container}>
            {props.children}
        </section>
    );
}

const headerHeight = lib.getHeight(window.innerHeight, 50, 75, 8);
const footerHeight = lib.getHeight(window.innerHeight, 40, 60, 5);
const styles = {
    container: {
        flex: 1,
        height: `calc(100% - ${headerHeight + footerHeight}px`
    }
};