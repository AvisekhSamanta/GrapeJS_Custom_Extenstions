import React from 'react';

export default function Template(props){
    return(
        <section style={styles.container}>
            {props.children}
        </section>
    );
}

const styles = {
    container: {
    }
};