const AdminTable = ({ admins }) => {
  return (
    <div className="overflow-auto">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th></th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {admins.map((admin, idx) => (
            <tr key={admin.id}>
              <th>{idx}</th>
              <td>
                {admin.firstName} {admin.lastName}{" "}
              </td>
              <td>{admin.email}</td>
              <td>{admin.role}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default AdminTable;
