import React from 'react';
import TeamCard from './TeamCard';
import teamDetails from './teamDetails';

function Teams() {
	return (
		<div className='teams'>
			<h1>Teams</h1>
			<div className='teams-card-container'>
				{teamDetails.map((member, index) => {
					return <TeamCard member={member} key={index} />;
				})}
			</div>
		</div>
	);
}

export default Teams;
