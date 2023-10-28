import DataGridTable from '../../components/dataGridTable/DataGridTable';
import {
  GridColDef,
  GridValueGetterParams,
  GridRenderCellParams,
} from '@mui/x-data-grid/models';
import './users.scss';
import { usersRows } from '../../mock/user-data';
import { useState } from 'react';
import CreateForm from '../../components/createForm/CreateForm';

const Users = () => {
  const [open, setOpen] = useState(false);

  const columns: GridColDef[] = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
      field: 'avatar',
      headerName: 'Avatar',
      width: 100,
      renderCell: (params: GridRenderCellParams) => {
        return (
          <img src={params.row.avatar} alt={params.row.firstName + ' avatar'} />
        );
      },
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 150,
      type: 'boolean',
    },
    {
      field: 'firstName',
      headerName: 'First name',
      width: 150,
      editable: true,
    },
    {
      field: 'lastName',
      headerName: 'Last name',
      width: 150,
      editable: true,
    },
    {
      field: 'age',
      headerName: 'Age',
      type: 'number',
      width: 110,
      editable: true,
    },
    {
      field: 'fullName',
      headerName: 'Full name',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,
      valueGetter: (params: GridValueGetterParams) =>
        `${params.row.firstName || ''} ${params.row.lastName || ''}`,
    },
  ];

  return (
    <div className='users'>
      <div className='header'>
        <h1>Users</h1>
        <button>Add New User</button>
      </div>
      <DataGridTable columns={columns} rows={usersRows} slug='users' />
      {open && <CreateForm columns={columns} slug='users' setOpen={setOpen} />}
    </div>
  );
};

export default Users;
