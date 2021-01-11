import React from 'react';
import { useParams } from 'react-router-dom';

import PlaceList from '../components/PlaceList';

// dummy places list
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

const UserPlaces = () => {
	const userId = useParams().userId;
	const loadedPlaces = DUMMY_PLACES.filter((place) => place.creator === userId);
	return <PlaceList items={loadedPlaces} />;
};
export default UserPlaces;
