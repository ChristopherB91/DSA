class spellNode {
  constructor(name, cost, obsolete) {
    this.spellName = name;
    this.manaCost = cost;
    this.isObsolete = obsolete;
    this.nextSpell = null;
  }
}

const spell1 = new spellNode("Wind Shot Alpha", 40, false);
const spell2 = new spellNode("Whirl Slash", 60, true);
const spell3 = new spellNode("Sky Piercer", 80, false);
const spell4 = new spellNode("Wind Shot Omega", 30, false);
const spell5 = new spellNode("Tempest Claw", 70, false);
const spell6 = new spellNode("Whirl Cyclone", 90, false);
const spell7 = new spellNode("Hawk Wind Dive", 50, false);

spell1.nextSpell = spell2;
spell2.nextSpell = spell3;
spell3.nextSpell = spell4;
spell4.nextSpell = spell5;
spell5.nextSpell = spell6;
spell6.nextSpell = spell7;

class linkedList {
  constructor(node) {
    this.head = node;
  }

  filter() {
    let current = this.head;
    let next = current.nextSpell;

    while (current.isObsolete || current.manaCost > 75) {
      this.head = current.nextSpell;
      current = this.head;
    }
    while (next) {
      if (next.isObsolete || next.manaCost > 75) {
        current.nextSpell = next.nextSpell;
        next = current.nextSpell;
      } else {
        current = next;
        next = current.nextSpell;
      }
    }

    return this.head;
  }

  add(next) {
    let current = this.head;
    while (current) {
      if (current.nextSpell === null) {
        current.nextSpell = next;
        break;
      } else {
        current = current.nextSpell;
      }
    }
  }

  group() {
    let current = this.filter();
    const preTraining = new linkedList();
  }
}

const yunosGrimoire = new linkedList(spell1);

console.log(yunosGrimoire.filter());
