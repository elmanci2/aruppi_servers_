import axios from "axios";

export async function doodstream(url: string) {
  try {
    const download_url = url.replace(/e/g, "d");
    console.log(download_url);

    // Establecer el User-Agent de Firefox
    const headers = {
      "User-Agent":
        "Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:99.0) Gecko/20100101 Firefox/99.0",
    };

    const { data } = await axios.get(download_url, { headers });

    const regex = /<\/?(i|a|div|script|span|label)\b[^>]*>/g;
    const fist_url = data.replace(regex, "");
    console.log(fist_url);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

