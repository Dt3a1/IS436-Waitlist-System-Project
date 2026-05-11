const EASTERN_TIME_ZONE = "America/New_York";

function pad(value) {
  return String(value).padStart(2, "0");
}

/**
 * Converts MySQL TIMESTAMP strings to Eastern time for admin display.
 * MySQL stores TIMESTAMP values in UTC internally.
 */
function formatTimestampForEastern(value) {
  if (!value) return value;

  const date = new Date(String(value).replace(" ", "T") + "Z");

  if (Number.isNaN(date.getTime())) {
    return value;
  }

  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: EASTERN_TIME_ZONE,
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const partMap = Object.fromEntries(
    parts.map((part) => [part.type, part.value])
  );

  return `${partMap.year}-${pad(partMap.month)}-${pad(partMap.day)} ${pad(
    partMap.hour
  )}:${pad(partMap.minute)}:${pad(partMap.second)}`;
}

module.exports = {
  formatTimestampForEastern,
};
