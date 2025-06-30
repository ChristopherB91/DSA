// 🔮 Mob Psycho 100: Emotion Surge Monitor
// 🧠 Context:
// Mob’s psychic powers are directly tied to his emotional state. Reigen has developed a monitoring device that logs Mob’s emotional surges throughout the day as a singly linked list. Each node in the list represents one surge event and includes:
// emotionType ("rage", "sadness", "joy", "fear", etc.)

// intensity (a number from 1–100)

// isSuppressed (boolean – whether Mob successfully suppressed the surge)

// nextSurge (pointer to the next event)

// 🎯 Your Task:
// Write a function that analyzes the linked list and builds a compressed emotional timeline, where:
// Surges that were suppressed and had intensity < 20 can be removed entirely, as they don’t contribute to Mob’s build-up.

// Consecutive surges of the same emotion type are merged into a single node.

// Their intensities are averaged (rounded down).

// If any of the merged nodes had isSuppressed = false, the merged node's isSuppressed should also be false.

// The resulting list should maintain the original chronological order (first to last).

class Node {
  constructor(emotion, intensity, suppressed) {
    this.emotionType = emotion;
    this.intensity = intensity;
    this.isSuppressed = suppressed;
    this.nextSurge = null;
  }
}

// Create new surges using the node class we created and information from the example and we point to the following surge
const surge1 = new Node("rage", 80, false);
const surge2 = new Node("rage", 60, true);
const surge3 = new Node("joy", 25, true);
const surge4 = new Node("sadness", 15, true);
const surge5 = new Node("sadness", 40, false);
const surge6 = new Node("sadness", 20, true);
const surge7 = new Node("joy", 10, true);
const surge8 = new Node("fear", 90, false);

surge1.nextSurge = surge2;
surge2.nextSurge = surge3;
surge3.nextSurge = surge4;
surge4.nextSurge = surge5;
surge5.nextSurge = surge6;
surge6.nextSurge = surge7;
surge7.nextSurge = surge8;

// Create our linkedList class that will take in the first surge as the head of list
class LinkedList {
  constructor(surge) {
    this.head = surge;
  }

  //  Create a method that gets rid of the low intensity surges(surges that have an intensity < 20) that were surpressed completing one of the tasks
  lowIntensity() {
    let currentSurge = this.head;
    let nextSurge = currentSurge.nextSurge;

    //  Checking the head first
    if (currentSurge.intensity < 20 && currentSurge.isSuppressed) {
      this.head = currentSurge.nextSurge;
      currentSurge = this.head;
      nextSurge = currentSurge.nextSurge;
    }

    // while nextSurge is a truthy value we see if the intensity is less than 20 and if it isSuppressed that way we can change currentSurge nextSurge thereby "deleting" it
    while (nextSurge) {
      if (nextSurge.intensity < 20 && nextSurge.isSuppressed) {
        currentSurge.nextSurge = nextSurge.nextSurge;
        nextSurge = currentSurge.nextSurge;
      } else {
        currentSurge = nextSurge;
        nextSurge = nextSurge.nextSurge;
      }
    }

    // return the new list
    return this.head;
  }

  merge() {
    let currentSurge = this.lowIntensity();
    let prev = currentSurge;
    let next = currentSurge.nextSurge;
    // Total variable to help finding the average later on
    let total = 1;

    while (currentSurge.nextSurge) {
      while (next) {
        // Find two surges with matching emotion type
        if (next.emotionType == currentSurge.emotionType) {
          // if nextSurge is not suppressed we set the currentSurge to it
          if (!next.isSuppressed) {
            currentSurge.isSuppressed = next.isSuppressed;
          }
          // adding intesity to calculate the average later
          currentSurge.intensity += next.intensity;
          // increasing the total so we can find the average
          total++;
          // deleting the node by changing the prev next surge pointer
          prev.nextSurge = next.nextSurge;
        }
        prev = prev.nextSurge;
        next = prev.nextSurge;
      }
      // Finding currentSurge average
      currentSurge.intensity = Math.floor((currentSurge.intensity /= total));
      // Reseting total for the next loop
      total = 1;
      // Then we go to the next surge and restart the process
      currentSurge = currentSurge.nextSurge;
      prev = currentSurge;
      next = currentSurge.nextSurge;
    }

    // Finally return the new LinkedList
    return this.head;
  }
}

const timeLine = new LinkedList(surge1);

console.log(timeLine.merge());
