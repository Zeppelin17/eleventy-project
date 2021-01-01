class Home {
  function(eleventyConfig) {
    eleventyConfig.addFilter("consoleDump", function () {
      console.log(this.page)
    })
  }

  render({ collections }) {
    console.log("hola")
    return `
      <!doctype html>
      <html lang="es">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device.width, initial-scale=1.0">
          <title>Mi Blog Personal</title>
        </head>
        <body>
          <h1>Listado de Posts</h1>
          ${collections.posts.map((post) => `<li><a href="${post.url}">${post.data.title}</a></li>`).join("\n")}
        </body>
      </html>
    `
  }
}

module.exports = Home