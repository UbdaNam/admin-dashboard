import { DataGrid } from '@mui/x-data-grid';
import { GridToolbar } from '@mui/x-data-grid/components';
import { GridColDef } from '@mui/x-data-grid/models';
import './data-grid-table.scss';

interface DataGridPropType {
  rows: object[];
  columns: GridColDef[];
}

const DataGridTable = ({ rows, columns }: DataGridPropType) => {
  return (
    <div className='data-table-container'>
      <DataGrid
        className='data-table'
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
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
