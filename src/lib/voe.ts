import axios from "axios";

export async function voe(url: string) {
  try {
    const { data } = await axios.get(url);

    const regex = /var\s+sources\s*=\s*({[^}]+})/;
    const match = data.match(regex);
    if (!match) throw new Error("Link not found");

    // eslint-disable-next-line @typescript-eslint/ban-ts-comment, quotes
    const sourcesString = match[1].replace(/'/g, '"');
    const parseFunction = new Function(`return ${sourcesString};`);
    const parsedData = parseFunction();

    const result = {
      url: parsedData.hls,
    };

    return result;
  } catch (error) {
    console.error("Error in voe:", error);
    throw new Error("Unexpected error in voe");
  }
}
