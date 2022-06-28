import svelte from 'rollup-plugin-svelte';
import replace from '@rollup/plugin-replace';
import dotenv from 'dotenv';

dotenv.config();

const production = !process.env.ROLLUP_WATCH;

export default {
	plugins: [
		replace({
			API_KEY: JSON.stringify(process.env.API_KEY)
		}),
		svelte({
			// enable run-time checks when not in production
			dev: !production,
			// we'll extract any component CSS out into
			// a separate file - better for performance
			css: (css) => {
				css.write('public/build/bundle.css');
			}
		})
	]
};
