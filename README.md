
This package contains OpenAPI definitions for our API endpoints and schemas.

## Linting

First, you'll need to install the rdme CLI:

```shell
npm install -g rdme
```

To lint, run

```shell
make lint
```

## Adding a new OpenAPI definition
* Create a new pull request with the new OpenAPI definition file and the rationale for the change.
* Create a github action to lint the new OpenAPI definition file (https://docs.readme.com/main/docs/rdme#quick-start)
