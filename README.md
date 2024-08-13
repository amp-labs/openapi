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

* Create a new pull request, once it is approved, merge it.
* In order to update the [online references](https://docs.withampersand.com/reference), go to the [docs repo](https://github.com/amp-labs/docs), check out a new branch, run `pnpm run gen` and create a PR with the change.

## Generating OpenAPI json definition

The json spec is auto generated on a commit (setup as a pre-commit hook) but if you'd like to generate it manually run the following

```shell
pnpm run gen:json
```
