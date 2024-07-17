/**
 * Note: the openapi specs in api/generated are used for auto-generation of documentation
 * and do not contain $ref attributes as the schema references are resolved at conversion
 *
 * Ref: https://apitools.dev/swagger-parser/docs/swagger-parser.html#dereferenceapi-options-callback
 */

import SwaggerParser from "@apidevtools/swagger-parser";
import fs from "fs";
import path from "path";

const specs = [
  {
    inputFile: path.join(__dirname, "../api/api.yaml"),
    outputFile: path.join(__dirname, "../api/generated/api.json"),
  },
  {
    inputFile: path.join(__dirname, "../api/read.yaml"),
    outputFile: path.join(__dirname, "../api/generated/read.json"),
  },
  {
    inputFile: path.join(__dirname, "../api/write.yaml"),
    outputFile: path.join(__dirname, "../api/generated/write.json"),
  },
];

async function deRefOpenApiSpecs() {
  try {
    specs.forEach(async (spec) => {
      const api = await SwaggerParser.dereference(spec.inputFile, {
        resolve: {
          external: true,
        },
        dereference: {
          circular: false,
        },
      });
      const deRefSpec = JSON.stringify(api, null, 2);
      fs.writeFileSync(spec.outputFile, deRefSpec);
      console.log(`Deref'd OpenAPI spec saved to ${spec.outputFile}`);
    });
  } catch (error) {
    console.error(`Error dereferencing OpenAPI spec: ${error.message}`);
  }
}

deRefOpenApiSpecs();
