const createRecipe = (name, description, youtube = []) => ({
	name,
	description,
	youtube,
});

const FOOD_LIST = {
	'Monday': {
		'Breakfast': [
			createRecipe('Scrambled Eggs', 'Eggs'),
			createRecipe('Ginisang Paliya', 'Paliya'),
		],
		'Lunch': [
			createRecipe('Pork bas-uy', 'Pork'),
		],
		'Snacks': [
			createRecipe('Kikiam', 'Kikiam'),
			createRecipe('Fishballs', 'Fishballs'),
		],
		'Dinner': [
			createRecipe('Pork Belly Sinugba', 'Sinugba'),
		],
	},
	'Tuesday': {
		'Breakfast': [
			createRecipe('Tocino', 'Tocino'),
			createRecipe('Sunny side-up egg', 'Eggs'),
		],
		'Lunch': [
			createRecipe('Chicken Sotanghon', 'Chicken', ['https://www.youtube.com/watch?v=MSESrlCh1f0']),
		],
		'Snacks': [
			createRecipe('Fries', 'Fries'),
		],
		'Dinner': [
			createRecipe('Calamares', 'Squid'),
			createRecipe('Virginia Sisig Frozen', 'Sisig'),
		],
	},
	'Wednesday': {
		'Breakfast': [
			createRecipe('Tortang Talong', 'Talong'),
			createRecipe('Longganisa', 'Longganisa'),
		],
		'Lunch': [
			createRecipe('Ginisang Kalabasa', 'Kalabasa'),
			createRecipe('Pork with Potato', 'Potato'),
		],
		'Snacks': [
			createRecipe('Bihon Guisado', 'Bihon'),
		],
		'Dinner': [
			createRecipe('Pork Humba', 'Pork'),
		],
	},
	'Thursday': {
		'Breakfast': [
			createRecipe('Sardine with egg', 'Sardine'),
			createRecipe('Sweet Ham', 'Ham'),
		],
		'Lunch': [
			createRecipe('Ginataang Manok with Sayote', 'Manok'),
		],
		'Dinner': [
			createRecipe('Sprite pork adobo', 'Adobo'),
		],
	},
	'Friday': {
		'Breakfast': [
			createRecipe('Ginisang Ampalaya', 'Paliya'),
			createRecipe('Buwad', 'Buwad'),
		],
		'Lunch': [
			createRecipe('Mongos', 'Mongos'),
			createRecipe('Pork Pinakupsan', 'Pinakupsan'),
		],
		'Snacks': [
			createRecipe('Kikiam', 'Kikiam'),
		],
		'Dinner': [
			createRecipe('Pork belly sinugba', 'Sinugba'),
		],
	},
	'Saturday': {
		'Breakfast': [
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
	'Sunday': {
		'Breakfast': [
		],
		'Lunch': [
		],
		'Dinner': [
		],
	},
};

export default FOOD_LIST;