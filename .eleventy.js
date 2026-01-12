const path = require("path");
const os = require("os");

module.exports = function (eleventyConfig) {
  eleventyConfig.addNunjucksFilter("date", function(value, format = "day-year") {
    const date = new Date(value);

    // Format day + month + year: e.g., 12 Jan 2026
    const options = { day: "numeric", month: "short", year: "numeric" };
    
    return date.toLocaleDateString("en-US", options);
  });
  // Optional: copy static assets
  eleventyConfig.addPassthroughCopy("src/assets");

  // Resolve the output directory reliably
  const outputDir = "_site";

  return {
    dir: {
      input: "src",
      includes: "_includes",
      layouts: "_includes/layouts",
      output: outputDir,
    },
    markdownTemplateEngine: "njk",
    htmlTemplateEngine: "njk",
    dataTemplateEngine: "njk",
  };
};
