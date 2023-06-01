const express = require('express');
const app = express();
const cors = require('cors');
const { sql, poolConnect, pool } = require('./connectDB');
const { MAX } = require('mssql');
const router = express.Router();


app.use(express.json());
app.use(router);
app.use(cors());

const PORT = process.env.PORT || 3002;

app.get('/', function (req, res) {
    res.write("<!DOCTYPE html>");
    res.write("<html style='font-familt: Roboto, Arial, sans-serif;'>");
    res.write("<head><title>Send it 69</title></head>");
    res.write("<body><p>Send it 420</p></body>");
    res.write("</html>");
    res.end();
});
router.get('/test', async (req, res) => {
    try {
        await poolConnect;
        const result = await pool.request().query('SELECT * FROM MunchifiedPicture');
        res.json(result.recordset);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).send("Server error");
    }

});


router.post('/test', async (req, res) => {
    try {
        await poolConnect;
        const {picture} = req.body;
        const result = await pool
        .request()
        .input('picture', sql.VarBinary(MAX), new Buffer.from(picture, 'base64'))
        .query(`INSERT INTO MunchifiedPicture (PictureBlob, PictureName, DateTime, BoothId) VALUES (@picture, 'test', getdate(), 10);`);
        res.status(200).json(result.recordset);
    } catch (err) {
        console.error("Error: ", err);
        res.status(500).json({message: "No success"});
        
    } finally {
        sql.close();
    }
});
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));