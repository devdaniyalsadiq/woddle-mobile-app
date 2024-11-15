import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../../screens/home/HomeScreen';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Image, StyleSheet} from 'react-native';
import CustomTabBarButton from '../../components/customTabBarButton';
import MoreScreen from '../../screens/home/MoreScreen';

type RootStackParamList = {
  Home: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();
const Tab = createBottomTabNavigator();

const StackNavigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerShown: false,
          tabBarStyle: styles.tabBar,
          tabBarLabelStyle: styles.tabBarLabel,
          tabBarIcon: ({focused, color, size}) => {
            if (route.name === 'Home') {
              return (
                <Image
                  source={require('../../../assets/images/home-icon.png')}
                  style={{width: 26, height: 26}}
                />
              );
            } else if (route.name === 'More') {
              return (
                <Image
                  source={require('../../../assets/images/more-icon.png')}
                  style={{width: 26, height: 26}}
                />
              );
            }
          },
          tabBarActiveTintColor: 'black',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen
          name="Woddle"
          component={HomeScreen}
          options={{
            tabBarButton: props => (
              <CustomTabBarButton
                {...props}
                iconSource={require('../../../assets/images/woddle.png')}
              />
            ),
          }}
        />
        <Tab.Screen name="More" component={MoreScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigation;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: '#FEF9F5',
    height: 80,
  },
  tabBarLabel: {
    fontSize: 12,
    paddingBottom: 5,
  },
});
