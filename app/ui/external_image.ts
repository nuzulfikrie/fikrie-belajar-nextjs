import fs from 'fs';
import https from 'https';
//this file ,loads external image from url and return as image const

//const heroImage = 'https://unsplash.com/photos/a-person-using-a-laptop-on-a-wooden-table-O-jx-rc6Y0g';

//1 - download from url put in public folder

const downloadImage = (url: string, destination: string): Promise<string> => {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(destination);
    //get extension from file
    const extension = url.split('.').pop();

    https.get(url, (response) => {
      response.pipe(file);

      file.on('finish', () => {
        file.close();
        resolve(destination);
      });

      file.on('error', (error) => {
        fs.unlink(destination, () => {
          reject(error);
        });
      });
    }).on('error', (error) => {
      reject(error);
    });
  });
};

const imageUrl = 'https://images.pexels.com/photos/792199/pexels-photo-792199.jpeg?cs=srgb&dl=pexels-nao-triponez-792199.jpg&fm=jpg&w=1280&h=854&_gl=1*164clvy*_ga*MTUxMjkzODU1OS4xNzAxNTYyMzE1*_ga_8JE65Q40S6*MTcwMTU2MjMxNi4xLjEuMTcwMTU2MjQ5My4wLjAuMA..';
const imagePath = './public/heroImage.jpg';

downloadImage(imageUrl, imagePath)
  .then((path) => {
    console.log(`Image downloaded and saved at ${path}`);
  })
  .catch((error) => {
    console.error('Failed to download image:', error);
  });

export { imagePath }; // This line is required to avoid TypeScript compilation errors
