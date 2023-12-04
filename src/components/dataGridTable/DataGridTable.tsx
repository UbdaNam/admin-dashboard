import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid/components';
import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid/models';
import './data-grid-table.scss';
import { Link } from 'react-router-dom';
import { AiOutlineFundView } from 'react-icons/ai';
import { MdDelete } from 'react-icons/md';

interface DataGridPropType {
  rows: object[];
  columns: GridColDef[];
  slug: string;
}

const DataGridTable = ({ rows, columns, slug }: DataGridPropType) => {
  const actionColumn: GridColDef = {
    field: 'actions',
    headerName: 'Actions',
    width: 150,
    renderCell: (params: GridRenderCellParams) => {
      return (
        <div className='action flex-center'>
          <Link to={`/${slug}/${params.row.id}`} className='view flex-center'>
            <AiOutlineFundView />
          </Link>
          <button className='delete flex-center'>
            <MdDelete />
          </button>
        </div>
      );
    },
  };

  return (
    <div className='data-table-container'>
      <DataGrid
        className='data-table'
        rows={rows}
        columns={[...columns, actionColumn]}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 10,
            },
          },
        }}
        slots={{ toolbar: GridToolbar }}
        slotProps={{
          toolbar: {
            showQuickFilter: true,
            quickFilterProps: { debounceMs: 500 },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        disableColumnFilter
        disableColumnSelector
        disableDensitySelector
      />
    </div>
  );
};

export default DataGridTable;
