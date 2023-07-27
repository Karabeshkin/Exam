const React = require('react');
const Layout = require('./Layout');

function ChirpPage({ chirp, user }) {
  return (
    <Layout user={user}>
      <div className="chirp_page">
        <h1>{chirp.description}</h1>
        <img src={chirp.image} alt="chirp" className="chirp_page_img" />
      </div>
    </Layout>
  );
}

module.exports = ChirpPage;
