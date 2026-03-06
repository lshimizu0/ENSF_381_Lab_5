import users from'./users.js';

function UsersList() {

  return (
    <div className="UsersList">

    <ul>
      {users.map(user => (
        <article> 
        <li key={user.id}>{user.name}</li>
        <h3>{user.first_name}</h3> 
        <p>User Group: {user.user_group}</p> 
        <p>ID: {user.id}</p> 
        </article> 
      ))}
    </ul>
    </div>
  );
}

export default UsersList;
