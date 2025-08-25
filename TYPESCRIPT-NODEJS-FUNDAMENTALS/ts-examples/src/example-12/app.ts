import express, { Request, Response } from "express";

const app = express();

app.get("/", (req: Request, res: Response) => {
	res.send("hello world");
});

const PORT = 3000;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
//http://localhost:3000/
