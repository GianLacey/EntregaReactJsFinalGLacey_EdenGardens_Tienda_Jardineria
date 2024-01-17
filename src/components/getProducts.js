import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase/config';

export const getProductById = async (id, productType) => {
  try {
    const productRef = doc(db, productType, id);
    const productSnapshot = await getDoc(productRef);

    if (productSnapshot.exists()) {
      return {
        id: productSnapshot.id,
        ...productSnapshot.data(),
      };
    } else {
      throw new Error('No se encontró el producto');
    }
  } catch (error) {
    console.error('Error al obtener el producto:', error);
    throw error;
  }
};