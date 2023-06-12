const express = require('express');
const app = express();
const cors = require('cors');
const { sql, poolConnect, pool } = require('./connectDB');
const { MAX } = require('mssql');
const router = express.Router();
const multer = require('multer');
const upload = multer();
const bodyParser = require('body-parser');

//Setting up cors to allow the api to be used by the frontend
app.use(cors({
    origin: 'http://localhost:3000',
    allowedHeaders: ['Content-Type', 'Authorization']
}));
// Limit the size of the body to 500Mb
app.use(bodyParser.json({limit: '500Mb'}));
app.use(bodyParser.urlencoded({limit: '500Mb', extended: true, parameterLimit: 50000}));

//Middleware for the api to use json and the router we have created in the top of the file
app.use(express.json());
app.use(router);


//Setting the port for the api
const PORT = process.env.PORT || 3001; //Setting the port for the api

// Middleware for the api to use json and the router we have created in the top of the file

//Setting up a basic html page
app.get('/', function (req, res) { 
    res.write("<!DOCTYPE html>");
    res.write("<html style='font-familt: Roboto, Arial, sans-serif;'>");
    res.write("<head><title>Rest API</title></head>");
    res.write("<body><p>Basic html page for the API</p></body>");
    res.write("</html>");
    res.end();
});

//This is the get function where the api does a select statement on the database
//and returns the result as a json object
router.get('/MunchifiedPicture', async (req, res) => { 
    try {
        await poolConnect;
        let result = await pool.request().query('SELECT * FROM MunchifiedPicture');
        res.json(result.recordset);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).send("Server error");
    }
});

//This is the post function where the api does a query on the database
//We insert the picture as a base64 string and then convert it to a buffer for validation
//The database will receive the picture as hex
router.post('/MunchifiedPicture', upload.single('picture'), async (req, res) => {
    try {
        await poolConnect;
        let pictureURL = rec.body.blobUrl;
        let pictureName = req.body.name;
        let result = await pool
        .request()
        .input('PictureURL', sql.VarChar(1024), pictureURL)
        .input('pictureName', sql.VarChar(50), pictureName)
        .query(`INSERT INTO MunchifiedPicture
        (PictureURL, PictureName, DateTime, BoothId)
        VALUES (@PictureURL, @pictureName, getdate(), 10);`);
        console.log("recieved data:", req.body);
        console.log("recieved file:", req.file);
        console.log("recieved file:", req.file.buffer);
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).json({message: "Unsuccessful POST."});
    }finally{
		pool.close();
	}
});

//App.listen is used to connect to the server on port 3001 the port declared in the top of the file
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));