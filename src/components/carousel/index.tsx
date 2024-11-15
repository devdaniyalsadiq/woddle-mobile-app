import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

const CustomCarousel = () => {
  return (
    <ImageBackground
      source={require('../../../assets/images/baby-banner.png')}
      style={styles.babySectionImage}>
      <View style={styles.babySection}>
        <View>
          <Text style={styles.babyName}>Christian Bowen</Text>
          <Text style={styles.babyAge}>1y 2m</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/gender.png')}
            style={{width: 14, height: 14, marginLeft: 12}}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  babySection: {
    flexDirection: 'row',
    borderRadius: 30,
    backgroundColor: '#F3F7FAB2',
    opacity: 0.8,
    margin: 16,
    paddingHorizontal: 18,
    paddingVertical: 14,
    width: 180,
  },
  babySectionImage: {
    width: '100%',
    height: 240,
    borderRadius: 23,
    overflow: 'hidden',
  },
  babyImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  babyName: {
    fontSize: 14,
    fontWeight: '700',
    fontFamily: 'cabin',
    marginBottom: 6,
    color: 'black'
  },
  babyAge: {
    fontSize: 14,
    fontWeight: '400',
    color: 'black'
  },
});

export default CustomCarousel;
