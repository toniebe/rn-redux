import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

const TransaksiCard = ({
  nama,
  bank,
  date,
  voucer,
  status,
  amount,
  accountNumber,
  color,
}) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={{color: '#AEAEAE', fontSize: 12, lineHeight: 16}}>
          {date}
        </Text>
        <Text style={{color: '#8D8D8D', fontSize: 12}}>
          {bank} {accountNumber}
        </Text>
        <Text style={{color: '#8D8D8D', fontWeight: 'bold', fontSize: 12}}>
          {nama}
        </Text>
      </View>
      <View style={styles.rightBox}>
        <View style={styles.statusBox}>
          <Text style={{color: 'white', fontSize: 12}}>{status}</Text>
        </View>
        <Text style={{color: color, fontSize: 16}}>{amount}</Text>
        <Text style={{color: '#AEAEAE', fontSize: 11}}>{voucer}</Text>
      </View>
    </View>
  );
};

export default TransaksiCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#C4C4C4',
  },
  statusBox: {
    backgroundColor: '#C4C4C4',
    alignItems: 'center',
    padding: 2,
  },
  rightBox: {
    alignItems: 'flex-end',
  },
});
