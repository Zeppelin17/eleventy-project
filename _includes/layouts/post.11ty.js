class Post {
  render({ page, title, date, content }) {
    return `
      <!doctype html>
      <html lang="es">
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device.width, initial-scale=1.0">
          <title>${title}</title>
        </head>
        <body>
          <a href="/">Volver</a>
          <h1>${title}</h1>
          <span>Escrito el ${page.date.toLocaleDateString()}</span>
          ${content}
        </body>
      </html>
    `
  }
}

module.exports = Post