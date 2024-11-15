import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface CustomCardProps {
  bgColor: string;
  title: string;
  content: string;
  subContent?: string;
  time: string;
}

const CustomCard: React.FC<CustomCardProps> = ({ bgColor, title, content, subContent, time }) => {
  return (
    <View style={[styles.card, { backgroundColor: bgColor }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardContent}>{content}</Text>
      <Text style={styles.cardSubContent}>{subContent}</Text>
      <Text style={styles.cardTime}>{time}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '45%',
    backgroundColor: '#f9f9f9',
    padding: 20,
    margin: 8,
    borderRadius: 15,
    elevation: 2,
  },
  cardTitle: {
    fontSize: 12,
    fontWeight: '400',
    marginBottom: 12,
    color: 'black'
  },
  cardContent: {
    fontSize: 32,
    fontWeight: '300',
    color: 'black'
  },
  cardSubContent: {
    fontSize: 32,
    fontWeight: '300',
    color: 'black'
  },
  cardTime: {
    marginTop: 12,
    fontSize: 10,
    color: '#878585',
  },
});

export default CustomCard;
