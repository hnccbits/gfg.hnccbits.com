import React from 'react';
import { FaGithub, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
// import { IoIosMail } from 'react-icons/io';

const TeamCard = ({
	member: {
		name,
		position,
		branch,
		batch,
		email,
		github,
		linkedin,
		insta,
		avatar,
	},
}) => {
	return (
		<div className='team__card'>
			<div className='team__card-img'>
				<img src={avatar} alt='team-1' />
				<div className='team__card-socials'>
					<a
						href={`https://github.com/${github}`}
						className='github'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaGithub size={25} />
					</a>
					<a
						href={`https://www.linkedin.com/in/${linkedin}`}
						className='linkedin'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaLinkedinIn size={25} />
					</a>
					<a
						href={`https://instagram.com/${insta}`}
						className='insta'
						target='_blank'
						rel='noopener noreferrer'
					>
						<FaInstagram size={25} />
					</a>
				</div>
			</div>
			<div className='team__card-content'>
				<h3>{name}</h3>
				<h4 style={{ fontWeight: '200' }}>{position}</h4>
				<h4>
					{branch} - {batch}{' '}
				</h4>
				<a href={`mailto:${email}`}>
					<span>{email}</span>
					<span className='bottom-line'></span>
				</a>
			</div>
		</div>
	);
};

export default TeamCard;
