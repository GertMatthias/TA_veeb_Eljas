//function dateNowFormattedET(){
exports.dateNowFormattedET = function(){
	let timeNow = new Date();
	let dateNow = timeNow.getDate();
	let monthNow = timeNow.getMonth();
	//let yearNow = timeNow.getYear();
	let yearNow = timeNow.getFullYear();
	const monthNamesET = ["jaanuar", "veebruar", "märts", "aprill", "mai", "juuni", "juuli", "august", "september", "oktoober", "november", "detsember"];
	//return dateNow + "." + (monthNow + 1) + "." + yearNow;
	return dateNow + ". " + monthNamesET[monthNow] + " " + yearNow;
}