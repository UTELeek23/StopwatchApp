import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StopWatch from "./Screens/stopwatch";


const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="StopWatch">
        <Stack.Screen name="StopWatch" component={StopWatch}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}