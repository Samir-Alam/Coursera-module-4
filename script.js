const hello = (name) => {
  console.log("Hello " + name);
};

const bye = (name) => {
  console.log("GoodBye " + name);
};

const fun = () => {
  var names = [
    "Samir",
    "John",
    "Jean",
    "Jason",
    "Pandey",
    "Firoz",
    "Lays",
    "Patrik",
    "Lulu",
    "Jimmy",
  ];
  for (var i = 0; i < names.length; i++) {
    var firstLetter = names[i].charAt(0).toLowerCase();
    if (firstLetter === "j") {
      bye(names[i]);
    } else {
      hello(names[i]);
    }
  }
};

fun();
