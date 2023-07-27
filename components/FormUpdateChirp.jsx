const React = require('react');
const Layout = require('./Layout');

function FormUpdateChirp({ title, user, chirp }) {
  return (
    <Layout title={title} user={user}>
      <form id="update-chirp" action={`/api/chirps/${chirp.id}`}>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Chirp image </label>
          <input
            value={chirp.image}
            name="image"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
          <input
            value={chirp.description}
            name="description"
            type="text"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <button type="submit" className="btn btn-primary">Добавить</button>
      </form>
    </Layout>
  );
}

module.exports = FormUpdateChirp;
