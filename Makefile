default: dev

dev:
	npm run build
	npx netlify-cli deploy

prod:
	netlify deploy --prod