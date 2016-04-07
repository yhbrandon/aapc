
install:
	npm install

dev:
	node ./bin/development.js

mongo:
	cd meteor_core && meteor mongo
