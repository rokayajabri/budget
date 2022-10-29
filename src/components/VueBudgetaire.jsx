import React from 'react';

const VueBudgetaire = (props) => {
	
	return (
		<>
			<span>Budgetaire: {props.budget} DH</span>
			<button type='button' className='btn btn-primary' onClick={props.handleEditClick}>
				Modifier
			</button>
		</>
	);
};

export default VueBudgetaire;