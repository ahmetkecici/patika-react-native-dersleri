import React from 'react'
import { View, Image, Text } from 'react-native';
import styles from './ProductCard.style';
const ProductCard = ({ product }) => {
  return (
    <View style={styles.container}>
      <Image style={styles.product_img} source={{ uri: product.imgURL }} />
      <Text style={styles.product_title}>{product.title}</Text>
      <View style={styles.inner_container}>
      
        <Text style={styles.product_price}>{product.price}</Text>
        {
          !product.inStock && (<Text style={styles.in_stock}>STOKTA YOK</Text>)
        }
      </View>
    </View>
  );
}
export default ProductCard;