default: build

build:
	rm -rf docs
	mkdir docs
	npm run build
	cp -R dist/* docs
