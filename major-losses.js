const fetch = require("node-fetch");

function stripHtml(html) {
  if (!html) return "";
  return html.replace(/<[^>]*>/g, " ").replace(/\s+/g, " ").trim();
}

exports.handler = async function () {
  const apiUrl =
    "https://www.reinsurancene.ws/wp-json/wp/v2/posts?tags=1030&per_page=15&_fields=title,link,date,excerpt";

  try {
    const res = await fetch(apiUrl, {
      headers: { "User-Agent": "KYROS-Intelligence/1.0" },
    });

    if (!res.ok) {
      return {
        statusCode: res.status,
        body: JSON.stringify({ error: `Upstream error ${res.status}` }),
      };
    }

    const json = await res.json();

    const items = json.map((post) => ({
      title: post.title?.rendered || "",
      url: post.link,
      date: post.date,
      summary: stripHtml(post.excerpt?.rendered || ""),
      source: "Reinsurance News",
    }));

    return {
      statusCode: 200,
      body: JSON.stringify({ items }),
      headers: {
        "Content-Type": "application/json",
        "Cache-Control": "public, max-age=600",
      },
    };
  } catch (err) {
    console.error(err);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server error" }),
    };
  }
};
