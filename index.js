import express from "express";
import axios from "axios";


const app = express();
const port = 3000;
const videoToken ="MTE4OTYyXzE2OTU2MzUyMDhfMTk3YzkzMjM4MmQ3MDAwZDZhZDQ5MGViYzdiN2JmMzQ0OWIzY2U5NA=="
app.use(express.static("public"));
app.get("/",async (req,res)=>{
    try {
        const response = await axios.get(`https://www.scorebat.com/video-api/v3/feed/?token=${videoToken}`);
        const data = response.data;
        res.render("index.ejs",{data});
      } catch (error) {
        console.error("Failed to make request:", error.message);
         res.render("index.ejs", {
           error: error.message,
        });
      }

})




app.listen(port,(req,res)=>{
    console.log(`Server is running on port ${port}`)
});