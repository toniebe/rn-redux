import React, {useEffect} from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import TransaksiCard from '../components/TransaksiCard';
import {useSelector, useDispatch} from 'react-redux';
import {getTransaksi} from '../redux/action';

const TransaksiScreen = () => {
  const dispatch = useDispatch();
  const transaksi = useSelector(state => state.transaksi);

  useEffect(() => {
    dispatch(getTransaksi());
  });

  //   console.log(transaksi, 'ini transaksi');

  const StatusName = status => {
    if (status === 'CP1') {
      return 'Complete';
    } else if (status === 'TRF') {
      return 'Transfer';
    } else if (status === 'REQ') {
      return 'Request';
    } else {
      return 'Reject';
    }
  };

  const Color = status => {
    if (status === 'CP1') {
      return '#5FC856';
    } else if (status === 'REQ' || status === 'TRF') {
      return '#006DBF';
    } else {
      return '#FF6948';
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <FlatList
        data={transaksi}
        renderItem={({item}) => (
          <TransaksiCard
            nama={item.accountHolderName}
            date={item.date}
            bank={item.bankName}
            amount={Math.floor(item.amount)}
            voucer={item.voucherID}
            status={StatusName(item.status)}
            accountNumber={item.accountNumber}
            color={Color(item.status)}
          />
        )}
      />
    </View>
  );
};

export default TransaksiScreen;

const styles = StyleSheet.create({});
