const React = require('react');

function ChirpItem({ chirp, user }) {
  
  const result = chirp.Likes && chirp.Likes.find((like) => like.dataValues.user_id === user?.id);
  
  return (
    <div data-id={chirp.id} className="card" style={{ width: '18rem' }}>
      <img src={chirp.image} className="card-img-top" alt="chirp" />
      <div className="card-body">
        {/* <h5 className="card-title">{chirp}</h5> */}
        <p className="card-text">{chirp.description}</p>
        <p className='card-text'>{chirp.date.toLocaleDateString()}</p>
        <a href={`/${chirp.id}`} className="btn btn-primary">Info</a>
        { user && (user.id === chirp.user_id) && (
          <>
            <button type="button" className="btn btn-danger btn-delete">Del</button>
            <a href={`/form-update-chirp/${chirp.id}`} className="btn btn-warning btn-update">Update</a>
          </>
        )}
        <div className="like__container">
          <img className="like" src={!result ? '/images/empty.png' : '/images/full.png'} alt="like" />
          <p className="count">{chirp.Likes && chirp.Likes.length}</p>
        </div>
      </div>
    </div>
  );
}

module.exports = ChirpItem;
