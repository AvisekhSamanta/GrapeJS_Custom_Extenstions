import React from 'react';
import colors from '../../../constants/colors';

export default function Header(props) {
	return (
		<header style={{ ...styles.container, ...props.style }} >
		<img width="200" height="48" src="https://media.glassdoor.com/sqll/2998922/magicmind-technologies-squarelogo-1567400071058.png" className="attachment-full size-full" alt="Juvare Logo" sizes="100vw" />
		</header>
	);
}
const styles = {
	container: {
		minHeight: '50px',
		maxHeight: '75px',
		height: '8%',
		padding: '5px',
		display: 'flex',
		flexDirection: 'row',
		alignItems: 'center'
		// borderBottom: `8px solid ${colors.customRed}`
	}
};