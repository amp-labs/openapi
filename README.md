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
* Request review, and merge the PR once it is approved
* After a few minutes, a Github Action on the [docs repo](https://github.com/amp-labs/docs) will auto-update the [online API reference](https://docs.withampersand.com/reference).

## Generating OpenAPI json definition

The json spec is auto generated on a commit (setup as a pre-commit hook) but if you'd like to generate it manually run the following

```shell
pnpm run gen:json
```
