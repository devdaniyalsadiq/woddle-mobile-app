import React from 'react';
import {StyleSheet, Image, View, Platform} from 'react-native';

const CustomHeader = () => {
  return (
    <View style={[styles.header, {marginTop: Platform.OS == 'android' ? 20 : 60}]}>
      <Image source={require('../../../assets/images/Woddle-logo.png')} />
      <View style={styles.headerIcons}>
        <Image
          source={require('../../../assets/images/message-icon.png')}
          style={{width: 30, height: 26}}
        />
        <Image
          source={require('../../../assets/images/avatar.png')}
          style={styles.profilePic}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 8,

  },
  headerIcons: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  profilePic: {
    width: 30,
    height: 30,
    borderRadius: 20,
    marginLeft: 12,
  },
});

export default CustomHeader;
