/*
 * Subject: Single Responsibility Design Principle
 * Author: Salar
 * Date: 2021-12-06
 * Description: The Journal class is responsible to contain a list of journal objects. It's not its responsibility to
 * save/load them from any medium. We may create other classes to manage that.
*/
class Journal {

	constructor() {
		this.entries = [];
	}
	addJournal(journalText) {
		this.entries.push(journalText);
	}
	removeJournal(index) {
		this.entries.splice(index);
	}
	toString() {
		return this.entries.join('\n');
	}
}

const j = new Journal();
j.addJournal('This is the first story');
j.addJournal('This is the second story');
console.log(`#1\n${j.toString()}`);
j.removeJournal(1);
console.log(`#2\n${j.toString()}`);
