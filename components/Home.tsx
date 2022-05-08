import { StatusBar } from 'expo-status-bar';
import { Base, Typography } from '../styles';
import { Image, StyleSheet, Text, View, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import warehouse from '../assets/warehouse.jpeg';
import Stock from '../components/Stock.tsx';

export default function Home({route, products, setProducts}) {
    return (
        <ScrollView>
            <Text style= {Typography.header1}>Lager-Appen 1.0</Text>
            <Image source={warehouse} style={Base.picture1} />
            <Stock products={products} setProducts={setProducts} />
        </ScrollView>
    );
}
