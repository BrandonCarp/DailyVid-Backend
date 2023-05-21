import express, {NextFunction, Request, Response} from "express";
require("dotenv").config();
import { YoutubePlaylistItem, YoutubePlaylist, YoutubePlaylistItemsResponse } from "./interface";
import { AxiosResponse } from "axios";
import { videoJson } from "./videoJson";
import { channelData } from "./channelJson";
const axios = require('axios');

const cors = require('cors');
const YOUTUBE_API_KEY = process.env.YOUTUBE_API_KEY;


const app = express();

// app.use(cors({
//   origin: [`https://daily-vid.vercel.app`, `https://http://localhost:3000`]
// }))

app.use(cors({
  origin: ['https://daily-vid.vercel.app', 'http://localhost:3000'],
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
}));

const PORT = 8585;

app.use(express.json())



app.use(function (req: Request, res: Response, next: NextFunction) {
  res.setHeader('Cross-Origin-Resource-Policy', 'same-site')
  next()
})


app.get(['/'], (req: Request, res: Response) => {
  res.sendStatus(200)
})


app.get(['/data/search'], (req: Request, res: Response) => {
  const search = req.query.q;
axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${search}&type=video&part=snippet&maxResults=6`)
.then(function (response: AxiosResponse<YoutubePlaylistItemsResponse[]>) {
 
  res.send(response.data)
}).catch(function (error: Error) {
  res.send(videoJson)
  console.log(error)
})
})

app.get(['/data/random'], (req: Request, res: Response) => {
  const search = req.query.q;
axios.get(`https://www.googleapis.com/youtube/v3/search?key=${YOUTUBE_API_KEY}&q=${search}&type=video&part=snippet&maxResults=6`)
.then(function (response: AxiosResponse<YoutubePlaylistItemsResponse[]>) {
 
  res.send(response.data)
}).catch(function (error: Error) {
  res.send(channelData)
  console.log(error)
})
})





app.listen(PORT, () => {
  console.log(`Application is listening on http://localhost:${PORT}`)
})


