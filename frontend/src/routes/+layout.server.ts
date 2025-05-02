import type { LayoutServerLoad } from './$types';
import { getGlobalPage} from '$lib/server/api/strapi';

export const load: LayoutServerLoad = async (event) => {
	const globalPageData = await getGlobalPage();
	return {
		globalPageData
	};
};
