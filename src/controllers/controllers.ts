import { Request, Response } from "express";
import { streamwish } from "../lib/streamwish";
import { voe } from "../lib/voe";
import { filelions } from "../lib/filelions";

const serverHandlers = [
  { keyword: ["streamwish", "sfastwish"], handler: streamwish },
  { keyword: ["nonesnanking", "voe", "kathleenmemberhistory"], handler: voe },
  { keyword: ["fviplions", "filelions"], handler: filelions },
];

export const server_intersection = async (req: Request, res: Response) => {
  const server_url = req.query.url;

  if (!server_url) {
    return res.status(400).json({ error: "Invalid parameters" });
  }

  try {
    const handler = serverHandlers.find(({ keyword }) =>
      keyword.some((kw) => String(server_url).includes(kw))
    );

    if (handler) {
      const result = await handler.handler(String(server_url));
      return res.status(200).json(result);
    } else {
      return res.status(400).json({ url: "" });
    }
  } catch (error) {
    return res.status(500).json({ url: "" });
  }
};
