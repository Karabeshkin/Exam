const React = require('react');
const Layout = require('./Layout');

function RegistrationForm({ title, user }) {
  return (
    <Layout title={title} user={user}>
      <form id="reg-form">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Your name</label>
          <input name="name" type="text" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input name="email" type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input name="password" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Confirm Password</label>
          <input name="cpassword" type="password" className="form-control" id="exampleInputPassword1" />
        </div>
        <h1 style={{ color: 'red' }} className="error" />
        <button type="submit" className="btn btn-primary">Сохранить</button>
      </form>
    </Layout>
  );
}

module.exports = RegistrationForm;
