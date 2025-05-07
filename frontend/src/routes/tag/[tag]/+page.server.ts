import { getArticlesByTagSlug, getArticlesPreviews } from '$lib/server/api/strapi';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const slug = event.params.tag;
	const article = await getArticlesByTagSlug(slug);
	const previewArticles = await getArticlesPreviews(3);
	return {
		article, previewArticles
	};
};
