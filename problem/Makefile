# Generate Go types from OpenAPI spec.
.PHONY: gen
gen:
	oapi-codegen --config=oapi.config.yaml --o=problem.gen.go problem.yaml

# Lint the OpenAPI spec.
.PHONY: lint
lint:
	rdme openapi:validate problem.yaml
