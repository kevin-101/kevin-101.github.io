import { readFile, writeFile } from "node:fs/promises";

export default async function convertTextArt(textDir) {
  const encodingOpts = { encoding: "utf-8" };

  const text = await readFile(`./public/${textDir}`, encodingOpts);

  const trimmed = text
    // Remove empty lines from beginning
    .replace(/^(\r?\n)+/, "")
    // Remove whitespace from end
    .trimEnd()
    // Remove whitespace from ends of lines
    .split("\n")
    .map((line) => line.trimEnd())
    .join("\n");

  const json = JSON.stringify(trimmed);

  return trimmed;

  //   const moduleSource = `export default ${json};\n`;

  //   await writeFile(outputPath, moduleSource, encodingOpts);

  //   console.log(`Text art module written to: ${outputPath}`);
}
