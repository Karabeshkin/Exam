const React = require('react');
const Layout = require('./Layout');
const ChirpItem = require('./ChirpItem');
const FormAddChirp = require('./FormAddChirp');

function ChirpsList({ chirps = [], user={user} }) {
  return (
    <>
      <h1>Chirps List</h1>
      <FormAddChirp />
      <div className="chirps-list">
        {chirps.map((chirp) => <ChirpItem chirp={chirp} key={chirp.id} user={user}/>)}
      </div>
    </>
  );
}

module.exports = ChirpsList;
