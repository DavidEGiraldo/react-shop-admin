'use client';

import FormProduct from '@components/FormProduct';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import { redirect } from 'next/navigation';

export default function Edit({ params }) {
  const product = useFetch(endPoints.products.getProduct(params.id));

  if (!product) {
    redirect('/dashboard/products');
  }

  return <>{product && <FormProduct product={product} />}</>;
}
