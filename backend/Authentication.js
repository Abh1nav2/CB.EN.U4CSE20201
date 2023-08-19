const axios = require('axios');

async function obtainAccessToken(clientID, clientSecret) {
  try {
    const response = await axios.post('http://20.244.56.144/train/auth', {
      companyName: 'Train Central',
      clientID,
      clientSecret,
      ownerName: 'Ram',
      ownerEmail: 'ram@abc.edu',
      rollNo: '1',
    });

    return response.data.access_token;
  } catch (error) {
    throw error;
  }
}

module.exports = { obtainAccessToken };
