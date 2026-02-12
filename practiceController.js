
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
  }
];

exports.getPractices = (req, res) => {
  res.json(practices);
};

exports.getPracticeById = (req, res) => {
  const practice = practices.find(p => p.id == req.params.id);
  res.json(practice);
};
