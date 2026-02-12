const express = require("express");
const cors = require("cors");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ===== Mock Practice Routes (SAFE FOR PROTOTYPE) =====
const practices = [
  {
    id: 1,
    name: "Bhagoria Haat",
    community: "Bhil Tribe",
    state: "Madhya Pradesh",
    description: "Seasonal tribal festival linked to agricultural cycles.",
    cai: {
      total: 74,
      indicators: {
        continuity: 78,
        ecology: 82,
        authority: 85,
        transmission: 65,
        distortion: 60
      },
      trend: [
        { year: 2022, score: 76 },
        { year: 2023, score: 75 },
        { year: 2024, score: 74 }
      ]
    }
  },
  {
    id: 2,
    name: "Sacred Grove Ritual",
    community: "Gond Tribe",
    state: "Madhya Pradesh",
    description: "Forest conservation through ritual protection.",
    cai: {
      total: 81,
      indicators: {
        continuity: 88,
        ecology: 90,
        authority: 84,
        transmission: 70,
        distortion: 75
      },
      trend: [
        { year: 2022, score: 83 },
        { year: 2023, score: 82 },
        { year: 2024, score: 81 }
      ]
    }
  }
];

// Root Route
app.get("/", (req, res) => {
  res.send("Sanskriti 360 API Running");
});

// Get All Practices
app.get("/api/practices", (req, res) => {
  res.json(practices);
});

// Get Practice By ID
app.get("/api/practices/:id", (req, res) => {
  const practice = practices.find(
    (p) => p.id === parseInt(req.params.id)
  );

  if (!practice) {
    return res.status(404).json({ message: "Practice not found" });
  }

  res.json(practice);
});

// Server
const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
