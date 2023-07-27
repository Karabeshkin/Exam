const React = require('react');

function FormAddChirp() {
  return (
    <form id="add-chirp" action="/api/chirps" method="POST">
      <div className="mb-3">
        <label htmlFor="exampleInputEmail1" className="form-label">
          Description
        </label>
        <input
          required
          name="description"
          type="text"
          className="form-control"
          id="exampleInputEmail1"
          aria-describedby="emailHelp"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="exampleInputPassword1" className="form-label">Image</label>
        <input
          name="image"
          type="text"
          className="form-control"
          id="exampleInputPassword1"
        />
      </div>
      <button type="submit" className="btn btn-primary">Добавить</button>
    </form>
  );
}

module.exports = FormAddChirp;
