import app from "./src/app.js";

const port = 3000 || process.env.PORT 
app.listen(port, (req, res) => {
    console.log(`http://localhost:${port}`);
})