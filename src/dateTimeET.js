const dateNowFormattedET = function(){
	let timeNow = new Date();
	//let dateNow = timeNow.getDate();
	//let monthNow = timeNow.getMonth();
	//let yearNow = timeNow.getYear();
	//let yearNow = timeNow.getFullYear();
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	//return dateNow + "." + (monthNow + 1) + "." + yearNow;
	return timeNow.getDate() + ". " + monthNamesET[timeNow.getMonth()] + " " + timeNow.getFullYear();
}

const timeNowFormattedET = function(){
	let timeNow = new Date();
	//let hourNow = timeNow.getHours();
	//let minuteNow = timeNow.getMinutes();
	//let secondNow = timeNow.getSeconds();
	return timeNow.getHours() + ":" + timeNow.getMinutes() + ":" + timeNow.getSeconds();
}

const weekDayET = function(){
	let timeNow = new Date();
	const weekdayNamesET = ["pühapäev", "esmaspäev", "teisipäev", "kolmapäev", "neljapäev", "reede", "laupäev"];
	return weekdayNamesET[timeNow.getDay()];
}

const partOfDay = function(){
	let dayPart = "suvaline aeg"
	let hourNow = new Date().getHours();
	if(hourNow <= 6){
		dayPart = "varahommik";
	}		
	else if(hourNow < 12){
		dayPart = "hommik";
	}
	else if(hourNow == 12){
		dayPart = "keskpäev";
	}
	else if(hourNow <= 16){
		dayPart = "päev";
	}
	return dayPart;
}

//eksordin kõik vajaliku
module.exports = {fullDate: dateNowFormattedET, fullTime: timeNowFormattedET, weekDay: weekDayET, partOfDay: partOfDay};