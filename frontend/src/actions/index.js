export const LOAD_CATEGORY_POSTS = 'LOAD_CATEGORY_POSTS';

export const loadCategoryPosts = ( categoryId ) => {
	return {
		type: LOAD_CATEGORY_POSTS,
		categoryId
	};
};
