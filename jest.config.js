module.exports = {
	preset: "ts-jest",
	testEnvironment: "jsdom",
	roots: ["./"],
	transform: {
		"^.+\\.(ts|tsx)?$": "ts-jest",
		"^.+\\.(js|jsx)$": "babel-jest",
		"node_modules/variables/.+\\.(j|t)sx?$": "ts-jest",
	},
	testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.tsx?$",
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	moduleNameMapper: {
		"^.+\\.(css|less|scss)$": "ts-jest",
	},
	transformIgnorePatterns: ["/node_modules/(?!<MODULE_NAME>).+\\.js$"],
	globals: {
		"ts-jest": {
			tsConfig: {
				// allow js in typescript
				allowJs: true,
			},
		},
	},
	setupFiles: ["./setupTests.ts"],
};
