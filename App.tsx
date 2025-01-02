import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './screens/Home/HomeScreen'; // Correct path for HomeScreen.tsx
import DetailsScreen from './screens/DetailsScreen'; // Ensure this matches your structure
import ShopsScreen from './screens/ShopDetails/ShopDetailsScreen'; // Correct path for ShopDetailsScreen.tsx
import OrderScreen from './screens/OrderScreen'; // Ensure this matches your structure
import ProfileScreen from './screens/Profile/ProfileScreen'; // Correct path for ProfileScreen.tsx

// Define the types for Stack Navigator screens
export type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Shops: undefined;
  Order: undefined;
  Profile: undefined;
};

// Create the stack navigator
const Stack = createStackNavigator<RootStackParamList>();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Details" component={DetailsScreen} />
        <Stack.Screen name="Shops" component={ShopsScreen} />
        <Stack.Screen name="Order" component={OrderScreen} />
        <Stack.Screen name="Profile" component={ProfileScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
