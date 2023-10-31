'use client';

import { useState } from 'react';
import Image from 'next/image';
import useFetch from '@hooks/useFetch';
import endPoints from '@services/api';
import Chart from '@common/Chart';
import Pagination from '@components/Pagination';

export default function Dashboard() {
  const [currentPage, setCurrentPage] = useState(1);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const pageSize = 10;

  const products = useFetch(
    endPoints.products.getProducts(pageSize * (currentPage - 1), pageSize)
  );

  const allProducts = useFetch(endPoints.products.getAllProducts);
  const totalCount = allProducts.length;

  const categoryNames = (arr) => arr?.map((product) => product.category.name);

  const countOccurrences = (arr) =>
    arr.reduce((prev, curr) => {
      prev[curr] = ++prev[curr] || 1;
      return prev;
    }, {});

  const data = {
    labels: Object.keys(countOccurrences(categoryNames(products))),
    datasets: [
      {
        data: Object.values(countOccurrences(categoryNames(products))),
        borderWidth: 2,
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        hoverOffset: 10,
      },
    ],
  };

  return (
    <>
      <Chart className="max-h-[50vh]" chartData={data} />
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Name
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Category
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Price
                    </th>
                    <th
                      scope="col"
                      className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    >
                      Id
                    </th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {products?.map((product) => (
                    <tr key={product.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="flex items-center">
                          <div className="flex-shrink-0 h-10 w-10 relative">
                            <Image
                              className="h-10 w-10 rounded-full"
                              src={product.images[0]}
                              alt={`Product ${product.id}`}
                              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                              fill={true}
                            />
                          </div>
                          <div className="ml-4">
                            <div className="text-sm font-medium text-gray-900">
                              {product.title}
                            </div>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">
                          {product.category.name}
                        </div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                          $ {product.price}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 overflow-hidden">
                        {product.id}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <Pagination
                props={{ currentPage, onPageChange, pageSize, totalCount }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
