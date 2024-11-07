const express = require("express");
const app = express(); 
const PORT = 5000; 
const cors = require("cors"); 

app.use(cors()); 

app.get("/", (req, res) => {
    res.json({ message: "Salut" }); 
}); 

app.listen(PORT, () => {   
    console.log(`Backend running on http://localhost:${PORT}`); 
});