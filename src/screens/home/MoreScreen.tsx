import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import CustomHeader from '../../components/header';

const MoreScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      {/* Header */}
      <CustomHeader />

      <View style={styles.container}>
        <Text>More</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MoreScreen;
