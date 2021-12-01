declare namespace AtomsScssNamespace {
	export interface IAtomsScss {
		title: string;
	}
}

declare const AtomsScssModule: AtomsScssNamespace.IAtomsScss & {
	/** WARNING: Only available when `css-loader` is used without `style-loader` or `mini-css-extract-plugin` */
	locals: AtomsScssNamespace.IAtomsScss;
};

export = AtomsScssModule;
