import DataGridTable from '../../components/dataGridTable/DataGridTable';
import './users.scss';

const Users = () => {
  return (
    <div className='users'>
      <div className='header'>
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataGridTable />
    </div>
  );
};

export default Users;
