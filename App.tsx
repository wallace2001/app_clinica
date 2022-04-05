import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import {
  useFonts,
  Poppins_500Medium,
  Poppins_300Light,
  Poppins_700Bold_Italic,
  Poppins_700Bold,
} from "@expo-google-fonts/poppins";

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import { AppProvider } from './src/context/context';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  let [fontsLoaded] = useFonts({
    Poppins_500Medium,
    Poppins_300Light,
    Poppins_700Bold_Italic,
    Poppins_700Bold,
  });

  if (!isLoadingComplete && !fontsLoaded) {
    return null;
  } else {
    return (
      <SafeAreaProvider>
        <AppProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </AppProvider>
      </SafeAreaProvider>
    );
  }
}
