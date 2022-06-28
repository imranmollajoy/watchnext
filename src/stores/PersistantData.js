import { writable } from 'svelte/store';

import { browser } from '$app/env';

const storedData =
	(browser &&
		JSON.parse(
			// @ts-ignore
			localStorage.getItem('imj_watchnext_persistant_data')
		)) ||
	[];
const imj_watchnext_persistant_data = writable(storedData);
imj_watchnext_persistant_data.subscribe(
	(val) => browser && (localStorage.imj_watchnext_persistant_data = JSON.stringify(val))
);

export default imj_watchnext_persistant_data;
