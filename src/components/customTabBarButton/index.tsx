import React from 'react';
import { TouchableOpacity, StyleSheet, Image, View, GestureResponderEvent } from 'react-native';

interface CustomTabBarButtonProps {
  iconSource: any;
  onPress?: (event: GestureResponderEvent) => void;
}

const CustomTabBarButton: React.FC<CustomTabBarButtonProps> = ({ iconSource, onPress }) => {
  return (
    <TouchableOpacity style={styles.customButtonContainer} onPress={onPress}>
      <View style={styles.customIcon}>
        <Image source={iconSource} style={styles.customIconImage} />
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customButtonContainer: {
    top: -30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  customIcon: {
    width: 92,
    height: 92,
    backgroundColor: '#ffffff',
    borderRadius: 100,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
  },
  customIconImage: {
    width: 90,
    height: 90,
  },
});

export default CustomTabBarButton;
