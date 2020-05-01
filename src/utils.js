export const endDates = [
  "1 April 2022",
  "1 October  2021",
  "1 April 2021",
  "1 October  2020"
];

export const getDate = dateString => {
  return new Date(dateString);
};

export const getStartDate = (value, xScale) => {
  let startDate =
    value["Estimated Study Start Date"] || value["Actual Study Start Date"];
  startDate = getDate(startDate);
  console.log(startDate);
  return xScale(startDate);
};

export const binMonth = value => {
  console.log(new Date(value).getMonth());
  const month = value.toLocaleString("default", { month: "long" });
  const year = value.getFullYear();

  return month === "October" && year === 2020
    ? `${month} ${year}`
    : `${month} ${year}`;
};
