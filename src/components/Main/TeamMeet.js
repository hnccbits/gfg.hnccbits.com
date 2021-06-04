import React from 'react';
import { Link } from 'react-router-dom';

function TeamMeet() {
	return (
		<div className='section'>
			<h1>Meet our team</h1>
			<h3>People behind working hard to make this possible</h3>

			<button>
				<Link to='/teams' style={{ textDecoration: 'none', color: '#fff' }}>
					Team
				</Link>
			</button>
		</div>
	);
}

export default TeamMeet;
