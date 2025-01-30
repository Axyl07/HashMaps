
# 1. How to run (for development):
# 2. npm install
# 3. npm run start (to run development server)

# 4. For Deployment:
# 5. Make a new branch to deploy from by running git branch gh-pages. You only need to do this the first time you deploy. The rest of the steps should be done every time you deploy or redeploy your project.
# 6. Make sure you have all your work committed. You can use git status to see if there’s anything that needs committing.
# 7. Run `git checkout gh-pages && git merge main --no-edit` to change branch and sync your changes from main so that you’re ready to deploy.
# 8. Now let’s bundle our application into dist with your build command. For now, that’s `npx webpack`.
# 9. Now there are a few more commands. Run each of these in order:

`git add dist -f && git commit -m "Deployment commit"`


`git subtree push --prefix dist origin gh-pages`


`git checkout main`
# 10. Recall that the source branch for GitHub Pages is set in your repository’s settings. Get this changed to the `gh-pages` branch. That should be everything!