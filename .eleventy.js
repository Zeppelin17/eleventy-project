module.exports = (eleventyConfig) => {
  eleventyConfig.addCollection("posts", (collection) => {
    return collection.getFilteredByGlob("posts/**/*.md")
  })
}