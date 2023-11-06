import Details from '../../components/details/Details';
import { userDetail } from '../../mock/user-details';
import './user.scss';

const User = () => {
  return (
    <div className='user'>
      <Details {...userDetail} />
    </div>
  );
};

export default User;
