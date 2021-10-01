function displayPeselNum(pesel) {
	document.getElementById("result").innerHTML = calculateControlSum(pesel);
}
function calculateControlSum(peselPart) {
	if (peselPart.length != 10) return "--";
	let dp = peselPart.split("");
	let ms = [1, 3, 7, 9, 1, 3, 7, 9, 1, 3];
	let dm = [];
	for (let i = 0; i < dp.length; i++) {
		dm.push(dp[i] * ms[i]);
	}
	let sum = dm.reduce((a, b) => a + b);
	let result = (10 - (sum % 10)) % 10;
	return result;
}
