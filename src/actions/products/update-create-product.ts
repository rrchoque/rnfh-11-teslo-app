import { isAxiosError } from 'axios';
import { tesloApi } from '../../config/api/tesloApi';
import { Product } from '../../domain/entities/product';

export const updateCreateProduct = ( product: Partial<Product> ) => {

  product.stock = isNaN( Number(product.stock)) ? 0 : Number(product.stock);
  product.price = isNaN( Number(product.price)) ? 0 : Number(product.price);

  if ( product.id !) {
    return updateProduct(product);
  }

  throw new Error('Creacińo no está implementada')
}

const prepareImages = ( images: string[] ) => {

  // Todo: revisar los FILES
  return images.map(
    image => image.split('/').pop()
  )
}

//TODO: revisar si viene el usuario
const updateProduct = async (product: Partial<Product>) => {
  console.log({product})

  const { id, images = [], ...rest  } = product;

  try {
    const checkedImages = prepareImages(images);
    console.log({checkedImages})
  
      const { data } = await tesloApi.patch(`/products/${id}`, {
        images : checkedImages,
        ...rest
      })
  
      return data;

  } catch (error) {
    if ( isAxiosError(error) ) {
      console.log(error.response?.data);
    }
    throw new Error('Error al actualizar el producto');
  }


}