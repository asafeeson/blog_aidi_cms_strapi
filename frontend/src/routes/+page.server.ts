import type { PageServerLoad } from './$types';
import { getArticlesPreviews, getRecentTags } from '$lib/server/api/strapi';
import type { IArticleCard } from '$lib/types';

export const load: PageServerLoad = async (event) => {
	const articles = (await getArticlesPreviews()) as IArticleCard[];
	const tags = await getRecentTags();
	return { articles, tags };
};
