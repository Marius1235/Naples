// Imported files and dependencies
const express = require('express');
const app = express();
const cors = require('cors');
const { sql, poolConnect, pool } = require('./connectDB');
const { MAX } = require('mssql');
const router = express.Router();

const PORT = process.env.PORT || 3002; //Setting the port for the api

// Middleware for the api to use json and the router we have created in the top of the file
app.use(express.json());
app.use(router);
app.use(cors());

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
router.post('/MunchifiedPicture', async (req, res) => {
    try {
        await poolConnect;
        let {picture} = req.body;
        let result = await pool
        .request()
        .input('picture', sql.VarBinary(MAX), new Buffer.from(picture, 'base64'))
        .query(`INSERT INTO MunchifiedPicture 
        (PictureBlob, PictureName, DateTime, BoothId) 
        VALUES (@picture, 'testName', getdate(), 10);`);
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).json({message: "Unsuccessful POST."});
    } finally {
        sql.close();
    }
});

//App.listen is used to connect to the server on port 3002 the port declared in the top of the file
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));