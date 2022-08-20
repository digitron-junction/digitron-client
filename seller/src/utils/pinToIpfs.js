import axios from 'axios';
import FormData from 'form-data';

export const pinFileToIPFS = async (image, productName, productId) => {
  const url = `https://api.pinata.cloud/pinning/pinFileToIPFS`;

  //we gather a local file for this example, but any valid readStream source will work here.
  let data = new FormData();
  data.append('file', image);

  //You'll need to make sure that the metadata is in the form of a JSON object that's been convered to a string
  //metadata is optional
  const metadata = JSON.stringify({
    name: '#' + productId + ': ' + productName,
    keyvalues: {
      product: productName,
      productId: productId
    }
  });
  data.append('pinataMetadata', metadata);

  //pinataOptions are optional
  const pinataOptions = JSON.stringify({
    cidVersion: 0,
    customPinPolicy: {
      regions: [
        {
          id: 'FRA1',
          desiredReplicationCount: 1
        },
        {
          id: 'NYC1',
          desiredReplicationCount: 2
        }
      ]
    }
  });
  data.append('pinataOptions', pinataOptions);

  try {
    const response = await axios.post(url, data, {
      maxBodyLength: 'Infinity',
      headers: {
        'Content-Type': `multipart/form-data; boundary=${data._boundary}`,
        pinata_api_key: process.env.REACT_APP_pinataApiKey,
        pinata_secret_api_key: process.env.REACT_APP_pinataSecretKey
      }
    });
    //handle response here
    console.log('response:', response);
    return response;
  } catch (error) {
    //handle error here
    console.log('error:', error);
  }
};
