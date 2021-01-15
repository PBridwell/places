import React from 'react';
import { useParams } from 'react-router-dom';

import './UpdatePlace.css';

const DUMMY_PLACES = [
	{
		id: 'p1',
		title: 'Grand Canyon',
		description: 'A really very large hole',
		imageUrl:
			'https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg?maxwidth=650&autorotate=false',
		address: 'S Entrance Rd, Grand Canyon Village, AZ 86023',
		location: {
			lat: 36.0591278,
			lng: -112.1093538,
		},
		creator: 'u1',
	},
	{
		id: 'p2',
		title: 'Grand Canyon',
		description: 'A really very large hole',
		imageUrl:
			'https://www.nps.gov/grca/planyourvisit/images/0531fyp.jpg?maxwidth=650&autorotate=false',
		address: 'S Entrance Rd, Grand Canyon Village, AZ 86023',
		location: {
			lat: 36.0591278,
			lng: -112.1093538,
		},
		creator: 'u2',
	},
];

const UpdatePlace = () => {
	const placeId = useParams().placeId;

	const identifiedPlace = DUMMY_PLACES.find((p) => p.id === placeId);

	if (!identifiedPlace) {
		return (
			<div className='center'>
				<h2>Could not find place!</h2>
			</div>
		);
	}

	return <h2>Update this face</h2>;
};

export default UpdatePlace;
