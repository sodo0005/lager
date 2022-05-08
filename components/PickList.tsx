import { View, Text, Button } from "react-native";
import { Base, Typography } from '../styles';
import orderModel from "../models/orders.ts";
import Order from "../interfaces/order";
import OrderItem from "../interfaces/order_item"
import productModel from "../models/products.ts"
import { useState, useEffect } from 'react';

export default function PickList({ route, navigation, setProducts }) {
    const { order } = route.params;
    const [productsList, setProductsList] = useState([]);

    async function reloadProducts () {
        setProductsList(await productModel.getProducts());
    }

    useEffect(async () => {
        setProductsList(await productModel.getProducts());
    }, []);

    async function pick() {
        await orderModel.pickOrder(order);
        setProducts(await productModel.getProducts());
        navigation.navigate("List", { reload: true });

    }

    const productsHash = productsList.reduce((hash, current) => ({ ...hash, [current.id]: current.stock }), {});

    let allInStock= true;


    const orderItemsList = order.order_items.map((item, index) => {
        if (productsHash[item.product_id] < item.amount){
            allInStock = false;
        }

        return <Text
                key={index}
                >
                    {item.name} - {item.amount} - {item.location}
            </Text>;
    });

    return (
        <View>
            <Text style={Typography.header4}>{order.name}</Text>
            <Text style={Typography.header4}>{order.address}</Text>
            <Text style={Typography.header4}>{order.zip} {order.city}</Text>

            <Text style={Typography.header3}>Produkter:</Text>

            {orderItemsList}

            {allInStock
                ? <Button title="Plocka order" onPress={pick} />
                : <Text>Ordern går inte att packa, då varor saknas.</Text>
                }

        </View>
    )
};
