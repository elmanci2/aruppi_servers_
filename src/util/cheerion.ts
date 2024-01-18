import * as cheerio from "cheerio";

export async function loadCheerioFromHTML(body: string) {
    if (!body) {
        throw new Error("Invalid parameters: 'body' cannot be empty");
    }
    try {
        const $ = cheerio.load(body);
        return $;
    } catch (error) {
        console.error("Error loading Cheerio:", error);
        throw new Error("Unexpected error loading Cheerio");
    }
}
