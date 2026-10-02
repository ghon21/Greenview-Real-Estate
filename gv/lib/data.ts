export type Listing = { id: string; address: string; suburb: string; price: string; beds: number; baths: number; cars: number; status: string; sample?: boolean };
export const sampleListings: Listing[] = [
  { id: "s1", address: "Sample listing", suburb: "Clyde North", price: "Price guide on request", beds: 4, baths: 2, cars: 2, status: "for_sale", sample: true },
  { id: "s2", address: "Sample listing", suburb: "Cranbourne North", price: "Price guide on request", beds: 3, baths: 2, cars: 2, status: "for_sale", sample: true },
  { id: "s3", address: "Sample listing", suburb: "Cranbourne", price: "Sold", beds: 4, baths: 2, cars: 1, status: "sold", sample: true },
];
export const reviews = [
  { name: "Michael Leslie", text: "Shami has very good knowledge of the local market. An honest reliable agent who got me a fair price in a short time frame." },
  { name: "Stephanie Chu", text: "Selling our home was seamless from start to finish. Fast communication and attention to detail made it stress-free." },
  { name: "Zaman Jawahar", text: "Great team. Very transparent with the process, and always quick to respond to my concerns and queries." },
  { name: "Sharifa Ahmadi", text: "Very prompt with replies, contactable and efficient, and knowledgeable about the surrounding properties." },
];
export const team = [
  { name: "Shami Hamdam", role: "Sales agent", area: "Clyde North and Cranbourne" },
  { name: "Sorush Nazari", role: "Sales agent", area: "Buyers and investors" },
  { name: "Fawad", role: "Sales support", area: "Seller campaigns" },
];
export const steps = [
  ["Appraisal within 24 hours", "We inspect, compare recent local sales and give you a realistic price range."],
  ["A written marketing plan", "Photography, floor plan, portals, signage and social, with dates agreed before you sign."],
  ["Weekly campaign updates", "Enquiries, inspection feedback and buyer interest every week. If the plan needs to change, we change it together."],
  ["Negotiation and settlement", "We handle offers, contracts and the path to settlement so you can plan your move."],
];
