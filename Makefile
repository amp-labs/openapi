.PHONY: all
all:
	echo "No default target."

.PHONY: lint
lint:
	cd api && rdme openapi:validate write.yaml && cd ..
	cd api && rdme openapi:validate read.yaml && cd ..
	cd api && rdme openapi:validate api.yaml && cd ..
	cd config && rdme openapi:validate config.yaml && cd ..
	cd catalog && rdme openapi:validate catalog.yaml && cd ..
	cd manifest && rdme openapi:validate manifest.yaml && cd ..
	cd problem && rdme openapi:validate problem.yaml && cd ..
	cd webhook && rdme openapi:validate webhook.yaml

.PHONY: gen
gen:
	pnpm run gen:json
