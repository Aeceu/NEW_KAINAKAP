import ChangeVerificationModal from "../modals/changeVerificationModal";

const UserTable = ({ users }) => {
  return (
    <div className="overflow-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 &&
            users.map((user, idx) => (
              <tr key={user.id}>
                <th>{idx}</th>
                <td>
                  {user.firstName} {user.lastName}{" "}
                </td>
                <td>{user.verificationStatus}</td>
                <td>
                  <ChangeVerificationModal user={user} />
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};
export default UserTable;
