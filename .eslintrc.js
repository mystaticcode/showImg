module.exports = {
	root: true,
	env: {
		node: true,
	},
	extends: ['plugin:vue/essential'],
	rules: {
		"no-console": process.env.NOOE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NOOE_ENV === "production" ? "error" : "off"
	},
	parserOptions: {
		parser: "babel-eslint"
	}
}
