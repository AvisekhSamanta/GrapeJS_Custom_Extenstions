import React from 'react';
import colors from '../../../constants/colors';

export default function Footer(props){
    return(
        <footer style={{ ...styles.container, ...props.style }}>
            {props.children}
        </footer>
    );
}
const styles = {
    container: {
        minHeight: '40px',
        maxHeight: '60px',
        height: '5%',
        // borderTop: `8px solid ${colors.customRed}`
      }
}