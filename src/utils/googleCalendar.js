export const createGoogleCalendarUrl = ({
  title,
  description,
  location,
  startDate,
  endDate,
}) => {
  const formatDate = (date) =>
    date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

  const params = new URLSearchParams({
    action: "TEMPLATE",
    text: title,
    details: description,
    location,
    dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
  });

  return `https://calendar.google.com/calendar/render?${params.toString()}`;
};
