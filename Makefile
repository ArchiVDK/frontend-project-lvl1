install: 
	npm install

brain-games:
	node bin/brain-games.js

publish:
	npm publish --dry-run

lint:
	npx eslint .

calc:
	node bin/brain-calc.js

even:
	node bin/brain-even.js

gcd:
	node bin/brain-gcd.js

prog:
	node bin/brain-progression.js

prime:
	node bin/brain-prime.js