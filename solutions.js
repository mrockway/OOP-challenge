// cross-pollination solutions
var vase = [];
var hybridFlower;
var hybridName;

//Pair Challenge
function Flower(name, color, petals, smellsPretty, season, thorns, size, local) {
	this.name = name;
	this.color = color;
	this.petals = petals;
	this.smellsPretty = smellsPretty;
	this.season = season;
	this.thorns = thorns;
	this.size = size;
	this.local = local;

	this.sniff = function() {
		console.log("Sniff Sniff Sniff!");
	};
	// Demonstrates use of arguments with methods
	this.smellsGood = function(answer) {
		if (answer) {
			return 'This flower smells amazing!';
		} else {
			return 'What a noxious weed!';
		}
	};
	// Demonstrates use of local object variables
	this.describe = function(answer) {
		alert("This flower is " + this.color + ".");
	};
	/// Demonstrates object to object interaction
	this.compare = function(otherFlower) {
		return ("My " + this.color + " flower is much prettier than your " +
			otherFlower.color + " flower :P");
	};
	this.render = function() {
		$('body').append("<p>My pretty flower is " + this.color +
			" and has " + this.petals + " pristine petals.</p>");
	};
	//Cross-Pollination Challenge
	this.crossPollinate = function(otherFlower) {
		var hybridColor = this.color + '-' + otherFlower.color;
		var hybridPetal = (this.petals + otherFlower.petals) / 2;
		var hybridPretty = prettyGene(this.smellsPretty, otherFlower.smellsPretty);
		hybridFlower = new Flower(hybridColor, hybridPetal, hybridPretty);
		hybridName = this.name + otherFlower.name;

		return hybridName, hybridFlower;
	};
	//stretch challenge
	this.placeFlower = function(otherFlower) {
		vase.push(hybridName, hybridFlower);
	};
	this.wilt = function(flower) {
		this.petals = petals - 1;
		return petals;
	};
	this.water = function(flower) {
		this.petals = petals + 1;
		return petals;
	};

}
//checks if 2 flowers smells pretty
function prettyGene(flower1, flower2) {
	if (flower1 && flower2) {
		return true;
	} else {
		return false;
	}
}
//stretch challenge attempt 2
function wilting(flower) {
	vase.flower.petals = petals - 1;
	return petals;
}
function watering(flower) {
	vase.flower.petals = petals + 1;
	return petals;
}

function busyBee(flower1, flower2) {
	var hybridColor = flower1.color + '-' + flower2.color;
	var hybridPetal = (flower1.petals + flower2.petals) / 2;
	var hybridPretty = prettyGene(flower1.smellsPretty, flower2.smellsPretty);
	hybridFlower = new Flower(hybridColor, hybridPetal, hybridPretty);
	hybridName = flower1.name + flower2.name;
	return vase.push(hybridName, hybridFlower);
}

var daisy = new Flower('daisy', "pink", 8, true, "spring", false, "small", true);
var rose = new Flower('rose', "red", 10, true, "winter", true, "large", false);
var tulip = new Flower("tulip", "yellow", 6, false, "fall", true, "small", true);
var lily = new Flower("lily", "white", 5, false, "spring", false, "large", false);

rose.crossPollinate(lily);
rose.placeFlower(rose);
tulip.wilt(tulip);
rose.water(rose);
console.log(rose);
console.log(tulip);
console.log(vase);