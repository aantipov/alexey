#! /usr/bin/env node

const boxen = require("boxen");
const { bold, cyan } = require("chalk").default;

const lines = [
  bold("Alexey Antipov"),
  "Front End Engineer at Zalando",
  "",
  bold("       Web: ") + cyan("https://alexei.me/"),
  bold("   Twitter: ") + cyan("https://twitter.com/_aantipov"),
  bold("    GitHub: ") + cyan("https://github.com/aantipov"),
  bold("  LinkedIn: ") + cyan("https://www.linkedin.com/in/aantipov")
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "#00e676",
  borderStyle: "round",
  margin: 1,
  padding: 1
});

process.stdout.write(box + "\n");
