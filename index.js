let express = require('express');
let app = express();
const path = require('path');

app.use(express.static("public"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"));
  });

  app.listen(process.env.PORT||5000);

