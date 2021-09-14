"use strict";

let thisDay = new Date();

document.getElementById("calendar").innerHTML = creatCalender(thisDay);

function creatCalender(calDate){
    let calendarHTML = "<table id='calendar-table'>";
    calendarHTML += calendarCaption(calDate);
    calendarHTML += calendarWeekDayRow(calDate);
    calendarHTML += calendarDays(calDate);
    calendarHTML += "</table>";

    return calendarHTML;
}

function calendarCaption(calDate){
    let monthName = ["January","February","March",
                    "April","May","June","July","August",
                    "September","October","November","December"];

    let thisMonth = calDate.getMonth();
    let thisYear = calDate.getFullYear();

    let calCaption = "<caption>" + monthName[thisMonth] + " " + thisYear + "</caption>";

    return calCaption;
}

function calendarWeekDayRow(calDate){
    let dayName = ["Sun","Mon","Tue",
                    "Wed","Thu","Fri","Sat"];

    let rowHTML = "<tr>";
    for(let dayIndex = 0; dayIndex < dayName.length; dayIndex++){
        rowHTML += "<th id='calendar-weekdays'>" + dayName[dayIndex] +
                "</th>";
    }
    rowHTML += "</tr>";

    return rowHTML;
}

function daysInMonth(calDate){
    let dayCount = [31,28,31,30,31,30,31,31,30,31,30,31];

    let thisMonth = calDate.getMonth();
    let thisYear = calDate.getFullYear();

    if(thisYear % 4 === 0){
        if((thisYear % 100 != 0) || (thisYear % 400 === 0)){
            dayCount[1] = 29;
        }
    }

    return dayCount[thisMonth];
}

function calendarDays(calDate){
    let today = new Date(calDate.getFullYear(),calDate.getMonth(),1);
    let weekDay = today.getDay();
    let highLightDay = calDate.getDate();
    let todayDay = calDate.getDay();
    let thisSun = highLightDay - todayDay;
    let totalDays = daysInMonth(calDate);

    let htmlCode = "<tr>";
    for(let countBlank = 0; countBlank < weekDay; countBlank++){
        htmlCode +="<td>&nbsp;</td>";
    }
    for(let days = 1; days < thisSun; days++){
        today.setDate(days);
        weekDay = today.getDay();
        if(weekDay === 0){
            htmlCode += "<tr>";
        }
        else{
            htmlCode += "<td class='calendar-dates'>" + 
                        days +"</td>";
        }
        if(weekDay === 6){
            htmlCode += "</tr>";
        }
    }

    htmlCode += "<tr>";
    for(let days = thisSun; days <= (thisSun + 6); days++){
        if(days === highLightDay){
            htmlCode += "<td class='calendar-dates' id='calendar-today'>" + days + dayDeal[(highLightDay - thisSun)] + "</td>";
        }
        else{
            htmlCode += "<td class='calendar-dates'>" + days + dayDeal[(days - thisSun)] +"</td>"; 
        }
    }
    htmlCode += "</tr>";
   
    htmlCode += "<tr>";
    for(let days = (thisSun + 7); days <= totalDays; days++){
        today.setDate(days);
        weekDay = today.getDay();
            htmlCode += "<td class='calendar-dates'>" + 
                        days +"</td>";
       
        if(weekDay === 6){
            htmlCode += "</tr>";
        }
    }

    return htmlCode;
}

/*function calendarDays(calDate){
    let today = new Date(calDate.getFullYear(),calDate.getMonth(),1);
    let weekDay = today.getDay();

    let htmlCode = "<tr>";
    for(let countBlank = 0; countBlank < weekDay; countBlank++){
        htmlCode += "<td>&nbsp;</td>";
    }

    let totalDays = daysInMonth(calDate);
    let highLightDay = calDate.getDate();
    let todayDay = calDate.getDay();
    let thisSun = highLightDay - todayDay;

    for(let days = 1; days <= totalDays; days++){
        today.setDate(days);
        weekDay = today.getDay();

        if(weekDay === 0){
            htmlCode += "<tr>";
        }
        if(days === highLightDay){
            htmlCode += "<td class='calendar-dates' id='calendar-today'>" + 
                        days + "</td>";
        }
        else{
            htmlCode += "<td class='calendar-dates'>" + 
                        days +"</td>";
        }
        if(weekDay === 6){
            htmlCode += "</tr>";
        }
    }
    
    return htmlCode;
}*/