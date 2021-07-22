import React from 'react';
import {View, Text, Image} from 'react-native';

//style
import styles from './CarItem.style';

const CardItem = ({products}) => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.img}
        source={{
          uri: products.imgURL,
        }}
      />

      <Text style={styles.title}>{products.title}</Text>
      <Text style={styles.price}>{products.price}</Text>
      <Text style={styles.inStock}>
        {products.inStock === true ? 'Satın Al' : 'Stokta Yok'}
      </Text>
    </View>
  );
};

export default CardItem;
