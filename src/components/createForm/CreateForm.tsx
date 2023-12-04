import { GridColDef } from '@mui/x-data-grid';
import './create-form.scss';

interface CreateFormPropTypes {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateForm = ({ slug, columns, setOpen }: CreateFormPropTypes) => {
  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div className='create-form flex-center'>
      <div className='modal'>
        <button className='close' onClick={handleClose}>
          X
        </button>
        <h1>Add new {slug}</h1>
        <form onSubmit={handleSubmit}>
          {columns
            .filter((column) => column.field !== 'id' && column.field !== 'img')
            .map((column) => (
              <div className='item' key={column.headerName}>
                <label>{column.headerName}</label>
                <input type={column.type} placeholder={column.field} />
              </div>
            ))}
          <button>Submit</button>
        </form>
      </div>
    </div>
  );
};

export default CreateForm;
