import { Request, Response } from 'express';

const express = require('express');

const app = express();

const port = 3000;

app.get('/', (req: Request, res: Response) => res.send('Hello, world!'));

app.listen(port, () => console.log(`bothy-tracker-backend listening on port ${port}`));
