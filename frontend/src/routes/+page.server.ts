import type { PageServerLoad } from './$types';
import { getArticlesPreviews, getGlobalSeo, getRecentTags } from '$lib/server/api/strapi';
import type { IArticleCard } from '$lib/types';

export const load: PageServerLoad = async (event) => {
	const articles = (await getArticlesPreviews()) as IArticleCard[];
	const tags = await getRecentTags();
	const globalSeoData = await getGlobalSeo();

	return { articles, tags, globalSeoData };
};
