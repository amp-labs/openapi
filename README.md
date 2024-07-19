
This package contains OpenAPI definitions for our API endpoints and schemas.

## Setup 

Ensure you have pnpm installed globally 

```shell 
npm install -g pnpm
```

Install dependencies 

```shell
pnpm i
```


## Adding a new OpenAPI definition
* Create a new pull request with the new OpenAPI definition file and the rationale for the change.
* Create a github action to lint the new OpenAPI definition file (https://docs.readme.com/main/docs/rdme#quick-start)


## Generating OpenAPI json definition

The json spec is auto generated on a commit (setup as a pre-commit hook) but if you'd like to generate it manually run the following

```shell
pnpm run gen:json
```

## Linting [soon to be deprecated]

First, you'll need to install the rdme CLI:

```shell
npm install -g rdme
```

To lint, run

```shell
make lint
```