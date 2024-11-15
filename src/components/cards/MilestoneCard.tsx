import React from 'react';
import {
  StyleSheet,
  Image,
  View,
  ImageBackground,
  Text,
  TouchableOpacity,
} from 'react-native';

const MilestoneCard = () => {
  return (
    <View style={styles.milestonesContainer}>
      <Image
        source={require('../../../assets/images/baby-banner-2.png')}
        style={styles.milestoneImage}
      />
      <View style={styles.milestonesContent}>
        <View>
          <Text style={styles.milestonesText}>Milestones</Text>
          <Text style={styles.milestonesDescription}>Month 12</Text>
        </View>
        <TouchableOpacity>
          <Image
            source={require('../../../assets/images/right-arrow.png')}
            style={{width: 32, height: 32}}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  milestonesContainer: {
    backgroundColor: '#f9f9f9',
    borderRadius: 15,
    marginTop: 18,
    marginBottom: 70,
    borderWidth: 1,
    borderColor: 'black',
  },
  milestoneImage: {
    width: '100%',
    height: 148,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  milestonesContent: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  milestonesText: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 12,
    color: 'black'
  },
  milestonesDescription: {
    fontSize: 32,
    fontWeight: '300',
    color: 'black'
  },
});

export default MilestoneCard;
