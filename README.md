This is my attempt at writing the shortest possible quine in JavaScript (targeting node.js). It's a mere **21 bytes**. You can read more about the quine <a href="https://github.com/nmrugg/quine/wiki">here</a>. It only works in Unix-like systems (like Linux and Mac OS X).

Two helper scripts are included. `init.sh` will create the necessary directory and `test.sh` will run the quine. (You need to run `init.sh` as root by the way, and you only need to run it once.)

The quine itself is located in `quine.js`.

Suggestions and pull requests are welcome.

_(There are also other types of JavaScript quines in the `others` directory just for fun.)_
