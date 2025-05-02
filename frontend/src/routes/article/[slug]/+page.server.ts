import { getArticleBySlug, getArticlesPreviews } from '$lib/server/api/strapi';
import type { IBlogArticle } from '$lib/types';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = async (event) => {
	const slug = event.params.slug;
	const articleContent = await getArticleBySlug(slug);
	const article = articleContent?.article as IBlogArticle;
	const previewArticles = (await getArticlesPreviews(3)) as IBlogArticle[];
	console.log(article);
	return {
		article,
		previewArticles
	};
};
