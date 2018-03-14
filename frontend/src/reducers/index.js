import {
	LOAD_CATEGORY_POSTS
} from '../actions';

function categoryPostLoader (state = {}, action) {
	const { categoryId } = action;

	if ( action.type === LOAD_CATEGORY_POSTS ) {
		console.log('Reducer Output: ', state);
		return {
			...state,
		};
	}
}

export default categoryPostLoader;
