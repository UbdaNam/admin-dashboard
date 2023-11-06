import Details from '../../components/details/Details';
import { productDetails } from '../../mock/product-details';
import './product.scss';

const Product = () => {
  return (
    <div className='product'>
      <Details {...productDetails} />
    </div>
  );
};

export default Product;
