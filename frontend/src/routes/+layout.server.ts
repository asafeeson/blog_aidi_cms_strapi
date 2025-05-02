import type { LayoutServerLoad } from './$types';
import { getGlobalPage, getGlobalSeo } from '$lib/server/api/strapi';

export const load: LayoutServerLoad = async (event) => {
	const globalSeoData = await getGlobalSeo();
	const globalPageData = await getGlobalPage();
	console.log(globalPageData);
	return {
		globalSeoData,
		globalPageData
	};
};
