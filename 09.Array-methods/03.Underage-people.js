//Problem 3
function buildPerson(firstName, lastName, age, gender) {
    return {
        firstName: firstName,
        lastName: lastName,
        age: age,
        gender: gender,
        introduce: function introduce() {
            var output = this.firstName + ' ' + this.lastName + ', ' + this.age + ' years old';
            if (gender) {
                output += ', female';
            } else {
                output += ', male';
            }
            return output;
        }
    }
}

function fillPersonsArray() {
    var resultArray = new Array(10),
        i,
        gender,
        fNameIndex,
        lNameIndex,
        fNames = ['Pesho', 'Gosho', 'Tosho', 'Dimo', 'Vasko', 'Maria', 'Svetla', 'Tina', 'Galya', 'Petya'],
        lNames = ['Peshev', 'Goshev', 'Toshev', 'Dimov', 'Vasilev', 'Dimitrova', 'Yaneva', 'Peteva', 'Gosheva', 'Tosheva'];
    for (var i = 0; i < 10; i+=1) {
        gender = Math.round(Math.random());
        if (gender) {
            fNameIndex = precRound(getRandomInRange(5, 9), 0);
            lNameIndex = precRound(getRandomInRange(5, 9), 0);
        } else {
            fNameIndex = precRound(getRandomInRange(0, 4), 0);
            lNameIndex = precRound(getRandomInRange(0, 4), 0);
        }
        resultArray[i] = buildPerson(fNames[fNameIndex], lNames[lNameIndex], precRound(getRandomInRange(0, 50), 0), !!gender);
    }
    return resultArray;
}

function underage(item) {
    return function(item) {return item.age < 18;}
}

var persons = fillPersonsArray(),
    underaged = persons.filter(underage());
console.log('');
console.log('Problem 3 result:');
outputMessage = 'The array of persons contins: ';
persons.forEach(function(item) {outputMessage += item.introduce() + '; ';});
document.getElementById('result3').innerHTML += '<br />' + outputMessage + '<br />';
console.log(outputMessage);

outputMessage = 'The underaged persons are: ';
underaged.forEach(function(item) {outputMessage += item.introduce() + '; ';});
document.getElementById('result3').innerHTML += '<br />' + outputMessage;
console.log(outputMessage);

document.getElementById('result3').innerHTML += '<br /><span class="explanation">The result is reported in the console also.</span>';
document.getElementById('result3').innerHTML += '<br /><span class="explanation">Refresh the page to see other results.</span>';