# Ampersand OpenAPI spec

This package contains OpenAPI definitions for Ampersand's API endpoints and schemas.

## Setup 

Ensure you have pnpm installed globally 

```shell 
npm install -g pnpm
```

Install dependencies 

```shell
pnpm i
```

## Making a change

* Create a new pull request
* Run `make lint` to ensure that the linter passes
* Request review, and merge the PR once it is approved. Please note that if the full spec has already been approved in a doc, or if you are simply updating descriptions or examples, you do not neeed to request PR review.
* After a few minutes, a Github Action on the [docs repo](https://github.com/amp-labs/docs) will auto-update the [online API reference](https://docs.withampersand.com/reference).

## Generating OpenAPI json definition

The json spec files are auto generated on a commit (setup as a pre-commit hook) but if you'd like to generate it manually run the following

```shell
pnpm run gen:json
```

# Best practices

# Best practices

- **Naming:** Use descriptive operation and type names, as generated SDKs & docs may reuse these names.
- **Tags:** The tags determine which section in the reference docs the endpoint will be grouped under, therefore you should always include tags for new endpoints.
- **Hide In-Development Endpoints:** If an endpoint is still in development, add `"x-excluded": true` to hide it from docs.
- **Required Request Parameters:** Ensure you mark parameters (query or path) and request bodies as `required: true` when needed.
- **Avoid Duplicates:** Do not create duplicate paths or types across specs unless absolutely necessary. Duplicate definitions (based on URL and method) can cause issues when generating unified docs or SDKs.
- **Using oneOf:** Apply `oneOf` only to entire schemas, not individual properties. While the linter might not flag it, using it on properties can lead to errors in SDK generation.
- **Documentation:** Provide clear descriptions and examples for each operation, as these details will show up in our docs.
- **Error Handling:** Include distinct responses only when the response types differ. Otherwise, use a `default` response to group similar responses. For instance, if an operation returns the same schema structure for both 404 and 502 (with different messages) but a completely different structure for 200, define two response schemas: one for 200 and one default.
