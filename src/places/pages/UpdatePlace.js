import React from 'react';
import { useParams } from 'react-router-dom';

import Input from '../../shared/components/FormElements/Input';
import Button from '../../shared/components/FormElements/Button';
import { VALIDATOR_REQUIRE, VALIDATOR_MINLENGTH } from '../../shared/util/validators';

import './PlaceForm.css';

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

	return (
		<form className='place-form'>
			<Input
				id='title'
				element='input'
				type='text'
				label='Title'
				validators={[VALIDATOR_REQUIRE()]}
				errorText='Please Enter a Valid Title.'
				onInput={() => {}}
				value={identifiedPlace.title}
				valid={true}
			/>
			<Input
				id='description'
				element='textarea'
				label='Description'
				validators={[VALIDATOR_MINLENGTH(5)]}
				errorText='Please Enter at least 5 characters.'
				onInput={() => {}}
				value={identifiedPlace.description}
				valid={true}
			/>
			<Button type='submit' disabled={true}>
				Update
			</Button>
		</form>
	);
};

export default UpdatePlace;
