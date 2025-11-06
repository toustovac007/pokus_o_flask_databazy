const express = require("express");
const bodyParser = require("body-parser");
const { createClient } = require("@supabase/supabase-js");

const app = express();
const port = 3000;

const supabase = createClient(
  process.env.SUPABASE_URL || "",
  process.env.SUPABASE_ANON_KEY || ""
);

app.use(bodyParser.json());

app.post("/add-user", async (req, res) => {
  const { name, password } = req.body;

  try {
    const { data, error } = await supabase.from("user").insert({ name, password });

    if (error) {
      return res.status(400).json({ error: error.message });
    }

    res.status(200).json({ message: "User added successfully", data });
  } catch (err) {
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(port, () => {
  console.log(`API server running at http://localhost:${port}`);
});
