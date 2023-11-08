import { Request, Response } from "express";
import { streamwish } from "../lib/streamwish";


export const server_intersection = async (req: Request, res: Response) => {
   // const server_url = req?.params?.url;
    const server_url = req.query.url;
    if (!server_url) {
        return res.status(400).json({ error: "Invalid parameters" });
    }

    if (String(server_url).includes("streamwish")) {
        try {
            const result =await  streamwish(String(server_url));
           
            return res.status(200).json(result);
        } catch (error) {
            return res.status(500).json({ error: "Internal server error" });
        }
    }

    return res.status(400).json({ error: "Unsupported server" });
};
