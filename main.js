import express from "express";

import usersRoute from "./routes/users.js";

const PORT = 3000;

const app = express();

app.use("/users", usersRoute)

app.listen(PORT, () => {
    console.log(`app is running on port ${PORT}`)
})