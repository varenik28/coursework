var months = new Array(12);
months[0] = "Январь";
months[1] = "Февраль";
months[2] = "Март";
months[3] = "Апрель";
months[4] = "Май";
months[5] = "Июнь";
months[6] = "Июль";
months[7] = "Август";
months[8] = "Сентябрь";
months[9] = "Октябрь";
months[10] = "Ноябрь";
months[11] = "Декабрь";
var time = new Date();
var lmonth = months[time.getMonth()];
var date = time.getDate();
var year = time.getYear();
if (year < 2000)
    year = year + 1900;
document.write("<font>" + lmonth + " ");
document.write(date + ", " + year + "</font>");