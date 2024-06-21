# Generate Go types from OpenAPI spec.
.PHONY: gen
gen:
	oapi-codegen --config=oapi.config.yaml --o=manifest.gen.go manifest.yaml

# Lint the OpenAPI spec.
.PHONY: lint
lint:
	rdme openapi:validate manifest.yaml
