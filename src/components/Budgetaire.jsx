import React, { useState, useContext } from 'react';
import VueBudgetaire from './VueBudgetaire';
import ModifierBudget from './ModifierBudget';
import { AppContext } from '../context/AppContext';

const Budgetaire = () => {
	const { budget, dispatch } = useContext(AppContext);
	const [isEditing, setIsEditing] = useState(false);

	const handleEditClick = () => {
		setIsEditing(true);
	};

	const handleSaveClick = (value) => {
		dispatch({
			type: 'SET_BUDGET',
			payload: value,
		});
		setIsEditing(false);
	};

	return (
		<div className='alert alert-secondary p-3 d-flex align-items-center justify-content-between'>
			{isEditing ? (
				<ModifierBudget handleSaveClick={handleSaveClick} budget={budget} />
			) : (
				<VueBudgetaire handleEditClick={handleEditClick} budget={budget} />
			)}
		</div>
	);
};

export default Budgetaire;
