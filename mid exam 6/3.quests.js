function questsJournal(input) {
  let journal = input.shift().split(", ");

  for (let i of input) {
    let end = i;

    if (i === "Retire!") {
      break;
    }

    let tokens = i.split(" - ");
    let command = tokens[0];
    let quest = tokens[1];

    if (command === "Start") {
      let exist = journal.includes(quest);

      if (!exist) {
        journal.push(quest);
      }
    } else if (command === "Complete") {
      let index = journal.indexOf(quest);

      if (index !== -1) {
        journal.splice(index, 1);
      }
    } else if (command === "Side Quest") {
      let tokens = quest.split(":");
      let questSide = tokens[0];
      let sideQuest = tokens[1];

      let indexQuest = journal.indexOf(questSide);
      let existSideQuest = journal.includes(sideQuest);

      if (indexQuest !== -1 && !existSideQuest) {
        journal.splice(indexQuest + 1, 0, sideQuest);
      }
    } else if (command === "Renew") {
      let index = journal.indexOf(quest);

      if (index !== -1) {
        let changePosition = journal.splice(index, 1);
        journal.push(changePosition[0]);
      }
    }
  }

  console.log(journal.join(", "));
}
questsJournal([
  "Hello World, If else",
  "Complete - Homework",
  "Side Quest - If else:Switch",
  "Renew - Hello World",
  "Retire!"
]);
