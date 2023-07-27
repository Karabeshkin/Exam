const React = require('react');

function NavBar({ user = {}}) {
  // console.log(user);
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid">
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="/">Main</a>
            </li>
            {user.name ? (
              <>
                <p>
                  Hi,
                  {' '}
                  {user.name}
                  !
                </p>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/api/auth/logout">Log out</a>
                </li>
              </>
            ) : (
              <>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/registration">Registration</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/auth/authorization">Authorization</a>
                </li>
              </>
            )}
          </ul>
        </div>
      </div>
    </nav>
  );
}

module.exports = NavBar;
