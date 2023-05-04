import { Express, Request, Response, NextFunction } from "express";
import getInstaHandler from "./controllers/insta.controller";
function routes(app: Express) {
  app.get('/api/data', getInstaHandler)
  
}

export default routes;