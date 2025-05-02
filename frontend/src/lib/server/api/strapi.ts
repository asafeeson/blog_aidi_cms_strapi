import { PRIVATE_STRAPI_TOKEN, PRIVATE_STRAPI_API_URL } from '$env/static/private';

const STRAPI_API_URL = PRIVATE_STRAPI_API_URL;
const STRAPI_TOKEN = PRIVATE_STRAPI_TOKEN;

export async function getArticlesPreviews(limit?: number) {
	try {
		const url = new URL(`${STRAPI_API_URL}/articles`);
		url.searchParams.append('sort', 'publishedAt:desc');
		url.searchParams.append('fields[0]', 'title');
		url.searchParams.append('fields[1]', 'preview');
		url.searchParams.append('fields[2]', 'slug');
		url.searchParams.append('fields[3]', 'duration');
		url.searchParams.append('fields[4]', 'publish_date');

		url.searchParams.append('populate[cover][fields][0]', 'url');
		url.searchParams.append('populate[cover][fields][1]', 'width');
		url.searchParams.append('populate[cover][fields][2]', 'height');
		url.searchParams.append('populate[cover][fields][3]', 'alternativeText');

		// Добавляем параметр limit, если он указан
		if (limit !== undefined) {
			url.searchParams.append('pagination[limit]', limit.toString());
		}

		const res = await fetch(url.toString(), {
			headers: {
				Authorization: `Bearer ${STRAPI_TOKEN}`,
				'Content-Type': 'application/json'
			}
		});

		if (!res.ok) {
			throw new Error(`Strapi error: ${res.statusText}`);
		}

		const data = await res.json();
		return data.data;
	} catch (error) {
		console.error('Error fetching from Strapi:', error);
		return [];
	}
}

export async function getArticleBySlug(slug: string) {
	try {
		const url = new URL(`${STRAPI_API_URL}/articles`);
		url.searchParams.append('filters[slug][$eq]', slug);
		url.searchParams.append('fields[0]', 'title');
		url.searchParams.append('fields[1]', 'content');
		// url.searchParams.append('fields[2]', 'seo');

		url.searchParams.append('populate[cover][fields][0]', 'url');
		url.searchParams.append('populate[cover][fields][1]', 'width');
		url.searchParams.append('populate[cover][fields][2]', 'height');
		url.searchParams.append('populate[cover][fields][3]', 'alternativeText');

		const res = await fetch(url.toString(), {
			headers: {
				Authorization: `Bearer ${STRAPI_TOKEN}`
			}
		});

		if (!res.ok) {
			throw new Error(`Ошибка запроса: ${res.statusText}`);
		}

		const json = await res.json();
		const article = json.data?.[0];

		if (!article) {
			throw new Error(`Статья со slug="${slug}" не найдена.`);
		}

		return { article };
	} catch (error) {
		console.error('Ошибка при получении статьи:', error);
		return null;
	}
}

export async function getRecentTags() {
	try {
		const res = await fetch(`${STRAPI_API_URL}/tags?sort=createdAt:desc&pagination[limit]=10`, {
			headers: {
				Authorization: `Bearer ${STRAPI_TOKEN}`
			}
		});
		const { data } = await res.json();
		return data.map((tag: any) => ({
			id: tag.id,
			tag: tag.tag,
			slug: tag.slug
		}));
	} catch (err) {
		console.error('Ошибка при получении тегов:', err);
		return [];
	}
}

export async function getArticlesByTagSlug(slug: string) {
	try {
		const url = `${STRAPI_API_URL}/articles?populate=tags,cover&filters[tags][slug][$eq]=${slug}`;
		const res = await fetch(url, {
			headers: {
				Authorization: `Bearer ${STRAPI_TOKEN}`
			}
		});
		const { data } = await res.json();
		return data.map((article: any) => ({
			id: article.id,
			...article.attributes
		}));
	} catch (err) {
		console.error('Ошибка при получении статей по тегу:', err);
		return [];
	}
}

export async function getGlobalSeo() {
	try {
		const url = `${STRAPI_API_URL}/global-seo`;
		const res = await fetch(url, {
			headers: {
				Authorization: `Bearer ${STRAPI_TOKEN}`
			}
		});
		if (!res.ok) {
			console.error('Error fetching global SEO from Strapi:', res.statusText);
			return null;
		}
		const { data } = await res.json();
		return data;
	} catch (error) {
		console.error('Error fetching global SEO from Strapi:', error);
		return null;
	}
}

export async function getGlobalPage() {
	try {
		const url = new URL(`${STRAPI_API_URL}/global-page`);
		url.searchParams.append('populate[0]', 'menu');

		const res = await fetch(url, {
			headers: {
				Authorization: `Bearer ${STRAPI_TOKEN}`
			}
		});
		if (!res.ok) {
			console.error('Error fetching global SEO from Strapi:', res.statusText);
			return null;
		}
		const { data } = await res.json();
		return data;
	} catch (error) {
		console.error('Error fetching global SEO from Strapi:', error);
		return null;
	}
}

export async function fetchArticle(slug: string) {
	try {
		const res = await fetch(
			`${STRAPI_API_URL}/api/articles?filters[slug][<span class="math-inline">eq\]\=</span>{slug}&populate=cover,seo.ogImage`,
			{
				headers: {
					Authorization: `Bearer ${STRAPI_TOKEN}`
				}
			}
		);
		if (!res.ok) {
			console.error(`Error fetching article "${slug}" from Strapi:`, res.statusText);
			return null;
		}
		const { data } = await res.json();
		return data?.length > 0 ? data[0].attributes : null;
	} catch (error) {
		console.error(`Error fetching article "${slug}" from Strapi:`, error);
		return null;
	}
}
