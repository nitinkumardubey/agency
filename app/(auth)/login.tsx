import React, { useEffect, useRef } from 'react';
import { View, StyleSheet, Animated } from 'react-native';
import { Button, Card, Text } from 'react-native-paper';
import { useRouter } from 'expo-router';
import { FontAwesome } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient';

export default function LoginScreen() {
    const router = useRouter();
    const fadeAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(fadeAnim, {
            toValue: 1,
            duration: 700,
            useNativeDriver: true,
        }).start();
    }, []);

    const handleGoogleLogin = () => {
        console.log("Google login pressed");
        router.push('/(home)');
    };

    return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View style={styles.container}>
                <Text variant="titleMedium" style={styles.logoText}>
                    InventoryPro
                </Text>

                <Text variant="bodyLarge" style={styles.tagline}>
                    Smart Inventory • Real-time Insights • Simplified Workflow
                </Text>
                <Button
                    mode="contained-tonal"
                    icon="google"
                    onPress={handleGoogleLogin}
                    style={styles.button}
                    contentStyle={styles.buttonContent}
                    labelStyle={styles.buttonLabel}
                >
                    Sign in with Google
                </Button>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "85%",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 16,
        flexDirection: "column"
    },
    logoText: {
        color: "#000000ff",
        textAlign: "center",
        marginBottom: 10,
        fontSize: 32
    },
    tagline: {
        textAlign: "center",
        color: "#1a304cff",
        marginBottom: 40,
        paddingHorizontal: 20,
    },
    button: {
        width: "85%",
    },
    buttonContent: {
        height: 60,
        justifyContent: "center",
    },
    buttonLabel: {
        fontSize: 18,
        fontWeight: "600",
    },
});
