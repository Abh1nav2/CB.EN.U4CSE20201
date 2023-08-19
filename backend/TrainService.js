const axios = require('axios');
const { obtainAccessToken } = require('./Authentication');

async function fetchTrainList() {
  try {
    const token = await obtainAccessToken('b46128a0-fbde-4c16-a4bl-6ae6ad718e27', 'XOyolORPayKBOdAN');
    const response = await axios.get('http://20.244.56.144/train/trains', {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

async function fetchTrainInfo(trainNumber) {
  try {
    const token = await obtainAccessToken('b46128a0-fbde-4c16-a4bl-6ae6ad718e27', 'XOyolORPayKBOdAN');
    const response = await axios.get(`http://20.244.56.144/train/trains/${trainNumber}`, {
      headers: { Authorization: `Bearer ${token}` },
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}

module.exports = { fetchTrainList, fetchTrainInfo };
