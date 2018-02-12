set -e

if [[ "false" != "$TRAVIS_PULL_REQUEST" ]]; then
	echo "Not deploying pull requests."
	exit
fi

if [[ "develop" != "$TRAVIS_BRANCH" ]]; then
	echo "Not on the 'develop' branch."
	exit
fi

rm -rf node_modules/ tasks/ source/
rm -rf .editorconfig .travis.yml package.json package-lock.json .babelrc webpack.config.babel.js gulpfile.babel.js config.js .gitignore

git config user.name "Travis CI"
git config user.email "travis@example.com"
git add -A
git commit --quiet -m "remove development files"

git checkout -b master
git pull origin master
git merge develop

git push --force --quiet "https://${GH_TOKEN}@${GH_REF}" master > /dev/null 2>&1
