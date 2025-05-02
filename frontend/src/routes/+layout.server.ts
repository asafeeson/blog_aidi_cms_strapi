import type { LayoutServerLoad } from './$types';
import { getGlobalSeo } from '$lib/server/api/strapi';

export const load: LayoutServerLoad = async (event) => {
	const globalSeoData = await getGlobalSeo();
	console.log(globalSeoData);
	return {
		globalSeoData
	};
};
