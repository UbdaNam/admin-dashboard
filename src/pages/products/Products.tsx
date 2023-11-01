import { GridColDef, GridRenderCellParams } from '@mui/x-data-grid';
import CreateForm from '../../components/createForm/CreateForm';
import DataGridTable from '../../components/dataGridTable/DataGridTable';
import './products.scss';
import { useState } from 'react';
import { productRows } from '../../mock/product-data';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 90 },
  {
    field: 'img',
    headerName: 'Image',
    width: 100,
    renderCell: (params: GridRenderCellParams) => {
      return <img src={params.row.img} alt={params.row.title} />;
    },
  },
  {
    field: 'title',
    type: 'string',
    headerName: 'Title',
    width: 200,
  },
  {
    field: 'color',
    type: 'string',
    headerName: 'Color',
    width: 120,
  },
  {
    field: 'price',
    type: 'string',
    headerName: 'Price',
    width: 150,
  },
  {
    field: 'product',
    headerName: 'Product',
    type: 'string',
    width: 150,
  },
  {
    field: 'createdAt',
    headerName: 'Created At',
    width: 150,
    type: 'string',
  },
  {
    field: 'inStock',
    headerName: 'In Stock',
    width: 150,
    type: 'boolean',
  },
];

const Products = () => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  };
  return (
    <div className='products'>
      <div className='header'>
        <h1>Products</h1>
        <button onClick={handleOpen}>Add New User</button>
      </div>
      <DataGridTable columns={columns} rows={productRows} slug='products' />
      {open && (
        <CreateForm columns={columns} slug='product' setOpen={setOpen} />
      )}
    </div>
  );
};

export default Products;
