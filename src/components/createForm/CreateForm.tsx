import { GridColDef } from '@mui/x-data-grid';
import './create-form.scss';

interface CreateFormPropTypes {
  slug: string;
  columns: GridColDef[];
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const CreateForm = ({ slug, columns, setOpen }: CreateFormPropTypes) => {
  return (
    <div className='create-form'>
      <div className='modal'>
        <span className='close'>X</span>
        <h1>Add new {slug}</h1>
      </div>
    </div>
  );
};

export default CreateForm;
