import { useState, useEffect } from 'react';
import { Text, View } from 'react-native';
import config from "../config/config.json";

function StockList() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(`${config.base_url}/products?api_key=${config.api_key}`)
      .then(response => response.json())
      .then(result => setProducts(result.data));
  }, []);

  const list = products.map((product, index) => <Text style={{color: '#7393B3', fontSize: 15, borderWidth: 2, marginTop: 5, marginBottom: 10, padding: 5}} key={index}>{ product.name } - { product.stock }</Text>);

  return (
    <View>
      {list}
    </View>
  );
}

export default function Stock() {
  return (
    <View>
      <Text style={{color: '#333', fontSize: 24}}>Lagerförteckning</Text>
      <StockList />
    </View>
  );
}
