// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  let pincodes = {
    "751001": ["Bhubaneswar", "Odisha"],
    "751007": ["Bhubaneswar", "Odisha"],
    "752101": ["Bhubaneswar", "Odisha"],
    "721302": ["Kharagpur", "Kolkota"],
    "110003": ["Delhi", "Delhi"],
    "560017": ["Banglore", "Karnataka"],
  };
  res.status(200).json(pincodes);
}
