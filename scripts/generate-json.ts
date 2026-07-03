/**
 * Note: the openapi specs in api/generated are used for auto-generation of documentation
 * and do not contain $ref attributes as the schema references are resolved at conversion
 *
 * Ref: https://apitools.dev/swagger-parser/docs/swagger-parser.html#dereferenceapi-options-callback
 */

import SwaggerParser from "@apidevtools/swagger-parser";
import { bundle, createConfig } from "@redocly/openapi-core";
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
  {
    inputFile: path.join(__dirname, "../problem/problem.yaml"),
    outputFile: path.join(__dirname, "../problem/generated/problem.json"),
  },
  {
    inputFile: path.join(__dirname, "../manifest/manifest.yaml"),
    outputFile: path.join(__dirname, "../manifest/generated/manifest.json"),
  },
  {
    inputFile: path.join(__dirname, "../catalog/catalog.yaml"),
    outputFile: path.join(__dirname, "../catalog/generated/catalog.json"),
  },
  {
    inputFile: path.join(__dirname, "../webhook/webhook.yaml"),
    outputFile: path.join(__dirname, "../webhook/generated/webhook.json"),
  },
  {
    inputFile: path.join(__dirname, "../config/config.yaml"),
    outputFile: path.join(__dirname, "../config/generated/config.json"),
  },
  {
    inputFile: path.join(__dirname, "../notifications/notifications.yaml"),
    outputFile: path.join(__dirname, "../notifications/generated/notifications.json"),
  },
  {
    inputFile: path.join(__dirname, "../api/search.yaml"),
    outputFile: path.join(__dirname, "../api/generated/search.json"),
  },
];

async function deRefOpenApiSpecs() {
  try {
    await Promise.all(specs.map(async (spec) => {
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
    }));
  } catch (error) {
    console.error(`Error dereferencing OpenAPI spec: ${error.message}`);
  }
}

/**
 * Bundled (as opposed to dereferenced) specs. Bundling merges external-file
 * $refs into a single document's components while preserving *internal* $refs
 * (e.g. Installation.connection stays `$ref: '#/components/schemas/Connection'`).
 *
 * The dereferenced api.json above inlines every $ref, which makes code
 * generators (e.g. oapi-codegen consumed by amp-common) emit anonymous nested
 * structs instead of reusing named component types. The bundled artifact keeps
 * those references so generated code gets shared, named types. It does not
 * replace the dereferenced JSON, which downstream docs generation relies on.
 *
 * We use Redocly (rather than swagger-parser's bundle) because it hoists every
 * shared schema into components/schemas with clean `#/components/schemas/...`
 * refs. swagger-parser's bundle instead points duplicate refs into the first
 * occurrence's `properties`, which oapi-codegen's loader cannot consume.
 */
const bundledSpecs = [
  {
    inputFile: path.join(__dirname, "../api/api.yaml"),
    outputFile: path.join(__dirname, "../api/generated/api.bundled.json"),
  },
];

async function bundleOpenApiSpecs() {
  try {
    const config = await createConfig({});

    await Promise.all(bundledSpecs.map(async (spec) => {
      const result = await bundle({
        ref: spec.inputFile,
        config,
        dereference: false,
      });
      const bundledSpec = JSON.stringify(result.bundle.parsed, null, 2);
      fs.writeFileSync(spec.outputFile, bundledSpec);
      console.log(`Bundled OpenAPI spec saved to ${spec.outputFile}`);
    }));
  } catch (error) {
    console.error(`Error bundling OpenAPI spec: ${error.message}`);
  }
}

async function main() {
  await deRefOpenApiSpecs();
  await bundleOpenApiSpecs();
}

main();
