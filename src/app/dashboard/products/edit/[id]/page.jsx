'use client';

import FormProduct from '@components/FormProduct';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';

export default function Edit({ params }) {
  const product = useFetch(endPoints.products.getProduct(params.id));

  return <FormProduct product={product} />;
}
