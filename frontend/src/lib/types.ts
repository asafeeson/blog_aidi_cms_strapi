export interface IMenuItem {
	index: number;
	url: string;
	name: string;
}

export interface IImage {
	src: string;
	alt?: string;
	title?: string;
	width?: number;
	height?: number;
	loading?: 'eager' | 'lazy';
	decoding?: 'sync' | 'async' | 'auto';
	referrerPolicy?: string;
	crossOrigin?: 'anonymous' | 'use-credentials';
	useMap?: string;
	longDesc?: string;
	isMap?: boolean;
	srcset?: string;
}

export interface ICrumbs {
	name: string;
	url: string;
}

export interface IArticleCard {
	cover: IImage;
	title: string;
	preview: string;
	date: string;
	duration: string;
}
