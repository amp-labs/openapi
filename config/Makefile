# Generate Go types from OpenAPI spec.
.PHONY: gen
gen:
	oapi-codegen --config=oapi.config.yaml --o=config.gen.go config.yaml

# Lint the OpenAPI spec.
.PHONY: lint
lint:
	rdme openapi:validate config.yaml
