import { publish } from 'gh-pages';

publish(
	'build', // path to public directory
	{
		branch: 'gh-pages',
		repo: 'https://github.com/imranmollajoy/watchnext.git', // Update to point to your repository
		user: {
			name: 'Imran Molla', // update to use your name
			email: 'imranmollajoy@gmail.com' // Update to use your email
		},
		dotfiles: true
	},
	() => {
		console.log('Deploy Complete!');
	}
);
