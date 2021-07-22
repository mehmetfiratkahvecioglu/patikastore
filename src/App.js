import React from 'react';
import {SafeAreaView, Text, FlatList, StyleSheet} from 'react-native';

//Components
import CardItem from './CardItem/CardItem';
import SearchBar from './SearchBar/SearchBar';
//Data
import productData from './product_data.json';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>PATIKASTORE</Text>
      <FlatList
        numColumns={2}
        ListHeaderComponent={() => <SearchBar />}
        data={productData}
        renderItem={({item}) => <CardItem products={item} />}
        keyExtractor={item => item.id.toString()}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    fontSize: 30,
    color: 'purple',
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default App;
