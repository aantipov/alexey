#! /usr/bin/env node

import boxen from "boxen";
import chalk from "chalk";

const lines = [
  chalk.bold("Alexey Antipov"),
  "Software Engineer",
  "",
  chalk.bold("       Web: ") + chalk.cyan("https://alexei.me/"),
  chalk.bold("      Blog: ") + chalk.cyan("https://alexei.me/blog/"),
  chalk.bold("   Twitter: ") + chalk.cyan("https://twitter.com/_aantipov"),
  chalk.bold("    GitHub: ") + chalk.cyan("https://github.com/aantipov"),
  chalk.bold("  LinkedIn: ") +
    chalk.cyan("https://www.linkedin.com/in/aantipov"),
  "",
  "Projects:",
  chalk.bold("     Moiva: ") + chalk.cyan("https://moiva.io/"),
];

const message = lines.join("\n");

const box = boxen(message, {
  borderColor: "#00e676",
  borderStyle: "round",
  margin: 1,
  padding: 1,
});

process.stdout.write(box + "\n");
