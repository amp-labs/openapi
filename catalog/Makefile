# Generate Go types from OpenAPI spec.

.PHONY: gen
gen:
	oapi-codegen --config=oapi.config.yaml --o=catalog.gen.go catalog.yaml

.PHONY: lint
lint:
	rdme openapi:validate catalog.yaml
