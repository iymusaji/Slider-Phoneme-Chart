// This file defines the threshold ages (in months) at which each phoneme
// reaches 50%, 75%, and 90% mastery according to Table 2 of the paper.
// (A few values have been adjusted to ensure monotonicity.)
const phonemeThresholds = {
  // Plosives
  "p": { t50: 30.6, t75: 32.73, t90: 33.25 },
  "b": { t50: 30.6, t75: 32.73, t90: 31.38 },  // Note: t90 < t75 here;
                                                // we fix this in our interpolation.
  "t": { t50: 31.2, t75: 33.82, t90: 38.54 },
  "d": { t50: 30.6, t75: 33.09, t90: 35.69 },
  "k": { t50: 31.2, t75: 33.82, t90: 37.69 },
  "ɡ": { t50: 31.2, t75: 33.82, t90: 36.77 },
  // Nasals
  "m": { t50: 30.6, t75: 32.73, t90: 33.23 },
  "n": { t50: 30.6, t75: 32.73, t90: 33.08 },
  "ŋ": { t50: 30.0, t75: 36.67, t90: 40.30 },
  // Fricatives
  "f": { t50: 31.2, t75: 33.82, t90: 38.31 },
  "v": { t50: 32.8, t75: 42.73, t90: 50.83 },
  "θ": { t50: 46.0, t75: 64.20, t90: 77.00 },
  "ð": { t50: 41.8, t75: 56.73, t90: 69.00 },
  "s": { t50: 32.4, t75: 38.55, t90: 51.33 },
  "z": { t50: 33.4, t75: 44.40, t90: 56.82 },
  "ʃ": { t50: 32.4, t75: 41.27, t90: 55.00 },
  "ʒ": { t50: 37.0, t75: 54.00, t90: 70.67 },
  "ʍ": { t50: 32.0, t75: 48.00, t90: 48.00 },  // ʍ lacks a reported 90%; we use t75.
  "h": { t50: 30.6, t75: 32.73, t90: 35.00 },
  // Approximants and Laterals
  "ɹ": { t50: 35.4, t75: 47.64, t90: 66.58 },
  "j": { t50: 33.0, t75: 39.60, t90: 45.77 },
  "l": { t50: 33.2, t75: 40.91, t90: 53.75 },
  "w": { t50: 30.6, t75: 32.73, t90: 35.23 },
  // Affricates
  "ʧ": { t50: 34.2, t75: 41.64, t90: 53.50 },
  "ʤ": { t50: 34.2, t75: 41.27, t90: 51.00 }
};
