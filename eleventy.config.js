export default function (eleventyConfig) {
	eleventyConfig.setInputDirectory('src');
	eleventyConfig.setOutputDirectory('dist');
	// Set directories to pass through to the dist folder
	eleventyConfig.addPassthroughCopy('src/images');
	// Returns work items, sorted by display order
	eleventyConfig.addCollection('work', (collection) => {
		return collection
			.getFilteredByGlob('./src/work/*.md')
			.sort((a, b) => (Number(a.data.displayOrder) > Number(b.data.displayOrder) ? 1 : -1));
	});
}
export const config = {
	markdownTemplateEngine: 'njk',
	htmlTemplateEngine: 'njk',
};
