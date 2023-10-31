import DataGridTable from '../../components/dataGridTable/DataGridTable';
import { GridColDef } from '@mui/x-data-grid/models';
import './users.scss';
import { userRows } from '../../mock/user-data';
import { useState } from 'react';
import CreateForm from '../../components/createForm/CreateForm';

const Users = () => {
  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'img',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params) => {
        return <img src={params.row.img || '/noavatar.png'} alt='' />;
      },
    },
    {
      field: 'firstName',
      type: 'string',
      headerName: 'First name',
      width: 120,
    },
    {
      field: 'lastName',
      type: 'string',
      headerName: 'Last name',
      width: 120,
    },
    {
      field: 'email',
      type: 'string',
      headerName: 'Email',
      width: 150,
    },
    {
      field: 'phone',
      type: 'string',
      headerName: 'Phone',
      width: 200,
    },
    {
      field: 'createdAt',
      headerName: 'Created At',
      width: 200,
      type: 'string',
    },
    {
      field: 'verified',
      headerName: 'Verified',
      width: 120,
      type: 'boolean',
    },
  ];

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className='users'>
      <div className='header'>
        <h1>Users</h1>
        <button onClick={handleOpen}>Add New User</button>
      </div>
      <DataGridTable columns={columns} rows={userRows} slug='users' />
      {open && <CreateForm columns={columns} slug='user' setOpen={setOpen} />}
    </div>
  );
};

export default Users;
