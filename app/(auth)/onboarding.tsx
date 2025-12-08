import React, { useRef, useState, useEffect } from 'react';
import { View, FlatList, ImageBackground, StyleSheet, Dimensions } from 'react-native';
import { Card, Text, Button } from 'react-native-paper';
import { useRouter } from 'expo-router';

const { width } = Dimensions.get('window');

const onboardingData = [
    {
        key: '1',
        title: 'Welcome to InventoryPro',
        description: 'Manage your stock and sales efficiently, all in one app.',
        image: require('../../assets/images/onboarding2.jpg'),
    },
    {
        key: '2',
        title: 'Track Your Inventory',
        description: 'Keep track of your products, stock levels, and suppliers in real-time.',
        image: require('../../assets/images/onboarding3.png'),
    },
    {
        key: '3',
        title: 'Request Orders Easily',
        description: 'Place orders to suppliers directly from the app and stay updated.',
        image: require('../../assets/images/onboarding4.png'),
    },
    {
        key: '4',
        title: 'Generate Bills & Reports',
        description: 'Create invoices, manage payments, and view detailed sales reports easily.',
        image: require('../../assets/images/onboarding1.png'),
    },
];

export default function OnboardingScreen() {
    const flatListRef = useRef<FlatList>(null);
    const [currentIndex, setCurrentIndex] = useState(0);
    const router = useRouter();

    // Auto-scroll every 3 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex(prevIndex => {
                const nextIndex = prevIndex < onboardingData.length - 1 ? prevIndex + 1 : 0;
                flatListRef.current?.scrollToIndex({ index: nextIndex, animated: true });
                return nextIndex;
            });
        }, 3000);

        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        if (currentIndex < onboardingData.length - 1) {
            flatListRef.current?.scrollToIndex({ index: currentIndex + 1, animated: true });
            setCurrentIndex(currentIndex + 1);
        } else {
            router.push('/login');
        }
    };

    const renderItem = ({ item }: { item: typeof onboardingData[0] }) => (
        <Card style={styles.card}>
            <ImageBackground
                source={item.image}
                style={styles.imageBackground}
                imageStyle={styles.imageStyle}
            >
                <View style={styles.overlay} />
                <View style={styles.textContainer}>
                    <Text variant="titleLarge" style={styles.title}>
                        {item.title}
                    </Text>
                    <Text variant="bodyMedium" style={styles.description}>
                        {item.description}
                    </Text>
                </View>
            </ImageBackground>
        </Card>
    );

    return (
        <View style={styles.container}>
            <FlatList
                ref={flatListRef}
                data={onboardingData}
                renderItem={renderItem}
                keyExtractor={(item) => item.key}
                horizontal
                pagingEnabled
                showsHorizontalScrollIndicator={false}
                onMomentumScrollEnd={(event) => {
                    const index = Math.round(event.nativeEvent.contentOffset.x / width);
                    setCurrentIndex(index);
                }}
            />

            <Button
                mode="contained"
                onPress={handleNext}
                style={styles.button}
            >
                {currentIndex === onboardingData.length - 1 ? 'Get Started' : 'Next'}
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'transparent',
    },
    card: {
        width: width - 40,
        marginHorizontal: 20,
        borderRadius: 16,
        overflow: 'hidden',
        justifyContent: 'center',
    },
    imageBackground: {
        width: '100%',
        height: '100%',
        justifyContent: 'flex-end',
    },
    imageStyle: {
        borderRadius: 16,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
    },
    textContainer: {
        alignItems: 'center',
        marginBottom: 30,
        paddingHorizontal: 20,
    },
    title: {
        color: '#fff',
        fontWeight: '600',
        textAlign: 'center',
        fontSize: 24,
    },
    description: {
        color: 'rgba(255,255,255,0.9)',
        textAlign: 'center',
        marginTop: 10,
        fontSize: 16,
    },
    button: {
        marginHorizontal: 40,
        marginVertical: 40,
        borderRadius: 8,
        paddingVertical: 8,
    },
});
