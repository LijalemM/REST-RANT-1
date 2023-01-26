const React = require('react')
const Def = require('./default')

function home () {
        return (
          <Def>
              <main>
                  <h1>HOME</h1>
                  <div>
                    <img src='/images/beyaynetu.jpg' alt='Mixed vagitables'/>
                    <div>
                      photo by <a href='https://unsplash.com/@danielcgold'> Dan Gold </a> on <a href='https://unsplash.com'> Unsplash </a>
                    </div>
                  </div>
                  <a href="/places">
                  <button className="btn btn-primary">Places Page</button>
                  </a>

              </main>
          </Def>
        )
      
}

module.exports = home
