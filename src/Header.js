export const Header = () => {
  const terminalWidth = process.stdout.columns;

  const headerText = "CARI CUAN";
  const subHeaderText = "GitHub: rekarachmadi99";
  const separatorLine = "=============================";

  const headerSpacing = Math.floor((terminalWidth - headerText.length) / 2);
  const subHeaderSpacing = Math.floor(
    (terminalWidth - subHeaderText.length) / 2
  );
  const separatorSpacing = Math.floor(
    (terminalWidth - separatorLine.length) / 2
  );

  console.log("\n".yellow + " ".repeat(separatorSpacing) + separatorLine.blue);
  console.log(" ".repeat(headerSpacing) + headerText.green.bold.bgWhite);
  console.log(" ".repeat(subHeaderSpacing) + subHeaderText.cyan.bold);
  console.log(" ".repeat(separatorSpacing) + separatorLine.blue + "\n");
};
