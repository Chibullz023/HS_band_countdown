// Find the current Day, Date & Year
var now = new Date();
var dayNames = new Array(
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday"
);

Today = new Date();
TodayDay = Today.getDate();
TodayMon = Today.getMonth();
TodayYear = Today.getFullYear();

if (TodayMon == 0) {
  TodayMonth = "January";
} else if (TodayMon == 1) {
  TodayMonth = "February";
} else if (TodayMon == 2) {
  TodayMonth = "March";
} else if (TodayMon == 3) {
  TodayMonth = "April";
} else if (TodayMon == 4) {
  TodayMonth = "May";
} else if (TodayMon == 5) {
  TodayMonth = "June";
} else if (TodayMon == 6) {
  TodayMonth = "July";
} else if (TodayMon == 7) {
  TodayMonth = "August";
} else if (TodayMon == 8) {
  TodayMonth = "September";
} else if (TodayMon == 9) {
  TodayMonth = "October";
} else if (TodayMon == 10) {
  TodayMonth = "November";
} else if (TodayMon == 11) {
  TodayMonth = "December";
} else {
  TodayMonth = TodayMon;
}

// Calculate the number of days left until the date specified
today = new Date();

BigDay = new Date("February 14, 2019");
msPerDay = 24 * 60 * 60 * 1000;
timeLeft = BigDay.getTime() - today.getTime();
e_daysLeft = timeLeft / msPerDay;
daysLeft = Math.floor(e_daysLeft);
e_hrsLeft = (e_daysLeft - daysLeft) * 24;
hrsLeft = Math.floor(e_hrsLeft);
minsLeft = Math.floor((e_hrsLeft - hrsLeft) * 60);

// Date project was last modified
var date = new Date(document.lastModified);
