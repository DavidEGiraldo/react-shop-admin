import endPoints from '@services/api';

const addProduct = async (body) => {
  try {
    const config = {
      method: 'POST',
      headers: {
        accept: '*/*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(endPoints.products.postProducts, config);
    console.log(response);
    const responseData = await response.json();

    if (!response.ok) {
      throw new Error(`${response.status} - ${response.statusText}`);
    }

    return responseData;
  } catch (error) {
    throw new Error(error.message);
  }
};

export { addProduct };
