const Airtable = require("airtable");
const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_KEY
);

const table = base("people");

console.log({ table });

export default async (req, res) => {
  async function getPerson(id) {
    const person = await table
      .select({
        filterByFormula: `id=${id}`,
      })
      .firstPage();

    if (!person) return { msg: "person not found" };

    return { msg: "person found!", person };
  }

  if (req.method === "POST") {
    const pres = await getPerson(1);

    res.status(200).json({ res: pres.person[0].fields });
  } else {
    res.json({ msg: "method is GET" });
  }
};
