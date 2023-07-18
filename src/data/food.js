const createRecipe = (name, description, youtube = []) => ({
	name,
	description,
	youtube,
});

const FOOD_LIST = {
	'Monday': {
		'Breakfast': [
			createRecipe('Spam', 'Spam'),
			createRecipe('Sunny side-up egg', 'Eggs'),
			createRecipe('Bacon', 'Bacon'),
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
	'Tuesday': {
		'Breakfast': [
			createRecipe('Spam', 'Spam'),
			createRecipe('Sunny side-up egg', 'Eggs'),
		],
		'Lunch': [
			createRecipe('Creamy Macaroni Soup', 'From Panlasang Pinoy', ['https://www.youtube-nocookie.com/embed/WVI2XrH8K90']),
		],
		'Dinner': [
		],
	},
	'Wednesday': {
		'Breakfast': [
			createRecipe('Spam', 'Spam'),
			createRecipe('Bacon', 'Bacon'),
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
	'Thursday': {
		'Breakfast': [
			createRecipe('Spam', 'Spam'),
			createRecipe('Sunny side-up egg', 'Eggs'),
			createRecipe('Bacon', 'Bacon'),
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
	'Friday': {
		'Breakfast': [
			createRecipe('Spam', 'Spam'),
			createRecipe('Sunny side-up egg', 'Eggs'),
			createRecipe('Bacon', 'Bacon'),
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
	'Saturday': {
		'Breakfast': [
			createRecipe('Spam', 'Spam'),
			createRecipe('Sunny side-up egg', 'Eggs'),
			createRecipe('Bacon', 'Bacon'),
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
	'Sunday': {
		'Breakfast': [
			createRecipe('Spam', 'Spam'),
			createRecipe('Sunny side-up egg', 'Eggs'),
			createRecipe('Bacon', 'Bacon'),
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
};

export default FOOD_LIST;