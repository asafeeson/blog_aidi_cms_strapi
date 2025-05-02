export interface IMenuItem {
	id: number;
	name: string;
	slug: string;
}

export interface ICrumbs {
	name: string;
	url: string;
}
export interface IImage {
	id?: number;
	documentId?: string;
	name?: string;
	alternativeText?: string | null;
	caption?: string | null;
	width?: number;
	height?: number;
	formats?: Record<string, unknown>;
	hash?: string;
	ext?: string;
	mime?: string;
	size?: number;
	url?: string;
	previewUrl?: string | null;
	provider?: string;
	provider_metadata?: Record<string, unknown> | null;
	createdAt?: string;
	updatedAt?: string;
	publishedAt?: string;
}

export interface IArticleCard {
	id?: number;
	documentId?: string;
	title?: string;
	preview?: string;
	content?: string;
	publish_date?: string;
	slug?: string;
	duration?: string;
	createdAt?: string;
	updatedAt?: string;
	publishedAt?: string;
	cover?: IImage;
	tags?: any[];

}

export interface IBlogArticle {
	id?: number;
	documentId?: string;
	title?: string;
	preview?: string;
	content?: string;
	publish_date?: string;
	slug?: string;
	duration?: string;
	createdAt?: string;
	updatedAt?: string;
	publishedAt?: string;
	cover?: IImage;
	tags?: any[];

}

export interface ITag {
	id: number;
	tag: string;
	slug: string;
}