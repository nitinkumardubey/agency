import { MD3LightTheme } from 'react-native-paper';
import {
    useFonts,
    Montserrat_300Light,
    Montserrat_400Regular,
    Montserrat_500Medium,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
    Montserrat_800ExtraBold,
    Montserrat_900Black,
} from '@expo-google-fonts/montserrat';

// Font loading hook
export const useFontLoader = () => {
    return useFonts({
        Montserrat_300Light,
        Montserrat_400Regular,
        Montserrat_500Medium,
        Montserrat_600SemiBold,
        Montserrat_700Bold,
        Montserrat_800ExtraBold,
        Montserrat_900Black,
    });
};

// Theme configuration
const theme = {
    ...MD3LightTheme,
    fonts: {
        displayLarge: { fontFamily: 'Montserrat_300Light', fontSize: 57 },
        displayMedium: { fontFamily: 'Montserrat_300Light', fontSize: 45 },
        displaySmall: { fontFamily: 'Montserrat_400Regular', fontSize: 36 },
        headlineLarge: { fontFamily: 'Montserrat_700Bold', fontSize: 32 },
        headlineMedium: { fontFamily: 'Montserrat_700Bold', fontSize: 28 },
        headlineSmall: { fontFamily: 'Montserrat_600SemiBold', fontSize: 24 },
        titleLarge: { fontFamily: 'Montserrat_600SemiBold', fontSize: 22 },
        titleMedium: { fontFamily: 'Montserrat_600SemiBold', fontSize: 16 },
        titleSmall: { fontFamily: 'Montserrat_500Medium', fontSize: 14 },
        bodyLarge: { fontFamily: 'Montserrat_400Regular', fontSize: 16 },
        bodyMedium: { fontFamily: 'Montserrat_400Regular', fontSize: 14 },
        bodySmall: { fontFamily: 'Montserrat_300Light', fontSize: 12 },
        labelLarge: { fontFamily: 'Montserrat_600SemiBold', fontSize: 14 },
        labelMedium: { fontFamily: 'Montserrat_500Medium', fontSize: 12 },
        labelSmall: { fontFamily: 'Montserrat_500Medium', fontSize: 11 },
    },
};

export default theme;