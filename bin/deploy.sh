set -e

if [[ "false" != "$TRAVIS_PULL_REQUEST" ]]; then
	echo "Not deploying pull requests."
	exit
fi

if [[ "develop" != "$TRAVIS_BRANCH" ]]; then
	echo "Not on the 'develop' branch."
	exit
fi

rm -rf .git
rm -r .gitignore

echo ".editorconfig
.travis.yml
.gitignore
bin
.babelrc
webpack.config.babel.js
gulpfile.babel.js
config.js
node_modules
tasks
package.json
src
config.toml
!/exampleSite/config.toml
!/exampleSite/content
!/exampleSite/static" > .gitignore

git init
git config user.name "Travis CI"
git config user.email "travis@example.com"
git add .
git commit --quiet -m "Deploy from travis"
git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master:master > /dev/null 2>&1
