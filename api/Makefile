# Lint the OpenAPI spec.
.PHONY: lint
lint:
	rdme openapi:validate api.yaml && \
	rdme openapi:lint write.yaml
