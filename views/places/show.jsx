const React = require('react')
const Def = require('../default')

function show (data) {
    return (
        <Def>
          <main>
            <h1>{data.place.name}</h1>
            <img src={data.place.img} alt={data.place.name} />
            <h3>{data.place.city}</h3>
            <h4>{data.place.state}</h4>
            <h5>{data.place.cuisines}</h5>
            <a href={`/places/${data.id}/edit`} className='btn btn-warning'> Edit
            </a>
            <form method='POST' action={`/places/${data.id}?_method=DELETE`}>
              <button type='submit' className='btn btn-danger'> Delete </button>
            </form>
          </main>
        </Def>
    )
}

module.exports = show
