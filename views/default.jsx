const React = require('react')

    function Def (html) {
        return (
            <html>
                <head>
                <title>Title</title>
                    <link rel="stylesheet" href= "/css/style.css"/>
                     <link href="
                      https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css
                      " rel="stylesheet"></link>
                </head>
                <body>
                <script src="
                     https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.min.js
                     "></script>
                    {html.children}
                </body>
            </html>
        )
      }
      

module.exports = Def
