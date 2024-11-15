import React from 'react';
import {View, Image, StyleSheet, ScrollView} from 'react-native';
import CustomHeader from '../../components/header';
import CustomCarousel from '../../components/carousel';
import MilestoneCard from '../../components/cards/MilestoneCard';
import CustomCard from '../../components/cards/CustomCard';
import {cardsData} from '../../utils/mock-data';

const HomeScreen = () => {
  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      {/* Header */}
      <CustomHeader />

      <ScrollView style={styles.container}>
        {/* Baby Section */}
        <CustomCarousel />

        {/* Cards */}
        <View style={styles.cardsContainer}>
          {cardsData.map((item, index) => {
            return <CustomCard key={index} {...item} />;
          })}
        </View>

        {/* Advertisement */}
        <Image
          source={require('../../../assets/images/save-big-banner.png')}
          style={styles.adContainer}
        />

        {/* Milestones */}
        <MilestoneCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    padding: 16,
  },

  cardsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginVertical: 8,
  },

  adContainer: {
    width: '100%',
    height: 76,
  },
});

export default HomeScreen;
