import adapter from '@sveltejs/adapter-vercel';
import preprocess from 'svelte-preprocess';
import pkg from './package.json';

export default {
	kit: {
		adapter: adapter(),
		vite: {
			ssr: {
				noExternal: Object.keys(pkg.dependencies || {})
			}
		}
	},
	preprocess: preprocess()
};

