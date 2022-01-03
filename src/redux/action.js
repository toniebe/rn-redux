export const GET_TRANSAKSI = 'GET_TRANSAKSI';

const API_URL = 'https://run.mocky.io/v3/9e181bbb-6911-4deb-b565-d2faeeec418a';

export const getTransaksi = () => {
  try {
    return async dispatch => {
      const result = await fetch(API_URL, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
      const json = await result.json();
      if (json) {
        console.log(json.data.history);
        dispatch({
          type: GET_TRANSAKSI,
          payload: json.data.history,
        });
      } else {
        console.log('Unable Connect');
      }
    };
  } catch (error) {
    console.log(error);
  }
};
