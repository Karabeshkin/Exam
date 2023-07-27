const React = require('react');
const Layout = require('./Layout');
const ChirpsList = require('./ChirpsList');

function MainPage({ chirps, user }) {
  console.log(user);
  return (
    <Layout user={user}>
      <h1>Main Page</h1>
      <ChirpsList chirps={chirps} user={user}/>
    </Layout>
  );
}

module.exports = MainPage;
