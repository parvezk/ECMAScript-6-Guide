
var names = ["david", "cynthia", "raymond", "clayton", "jennifer"];
putstr("enter a name to search");
var name = readline();
var position = names.indexOf(name);

if (position >= 0)
    print("Found " + name + "at pos: " + position);
else
    print(name + "not found");