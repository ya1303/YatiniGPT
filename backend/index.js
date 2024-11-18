import express from 'express';
import ImageKit from 'imagekit';
import dotenv from 'dotenv';
import cors from "cors";
const app = express();
app.use(cors({
    origin:process.env.CLIENT_URL,
}));

dotenv.config(); 

const port = process.env.PORT || 3000;

const imagekit = new ImageKit({
    urlEndpoint: process.env.IMAGE_KIT_ENDPOINT,
    publicKey: process.env.IMAGE_KIT_PUBLIC_KEY,     
    privateKey: process.env.IMAGE_KIT_PRIVATE_KEY    
});

app.get('/api/upload', (req, res) => {
    const result = imagekit.getAuthenticationParameters();
    res.send(result); 
});

app.listen(port, () => {
    console.log('Server is running on port ' + port);
});