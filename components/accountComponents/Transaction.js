import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';
import TransactionCard from './TransactionCard';

const Transaction = () => {
  return (
    <View style={styles.transaction_main_view}>
      <ScrollView contentContainerStyle={styles.transaction_scroll_view}>
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
        <TransactionCard />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  transaction_main_view: {
    backgroundColor: '#F4F5F9',
    height: '100%',
  },
  transaction_scroll_view: {
    paddingHorizontal: 17,
    paddingVertical: 25,
    gap: 10,
  },
});

export default Transaction;
