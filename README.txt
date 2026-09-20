ARTIENDA - M7A5: MAKE YOUR PORTFOLIO INTERACTIVE

FILES TO PUBLISH
index.html
styles.css
script.js
projects/ (include every nested browser file and media asset)

Upload these contents into the existing GitHub Pages publishing folder.
Do not place the entire local portfolio folder inside that publishing folder.
Do not upload the work/ test scripts from the separate Codex workspace.
Keep the remote repository named hailey-cezanne.github.io.

IMPLEMENTATION CHECKLIST
- index.html contains an empty #project-list.
- script.js is external, linked with defer, and starts with 'use strict';.
- projects contains sixteen real coursework objects with multiple properties.
- filterProjects(list, searchTerm, category) returns filtered data without DOM access.
- renderProjects(list) loops over data and writes the container once.
- renderProjects(projects) displays all projects on initial load.
- Search uses input; category uses change; both re-filter and re-render.
- Search is trimmed and case-insensitive; empty search restores matching projects.
- No matches display a useful sentence and Showing 0 of 16 projects.
- Controls and cards match the portfolio design.
- Nine cards use View Project with relative demo paths; seven use View Code with verified GitHub URLs.

PUBLIC-SITE CHECK BEFORE SUBMITTING
Local success is not proof that the public site has been updated.
1. Publish the complete files to the existing Pages publishing branch/folder.
2. Wait for the Pages deployment to succeed in GitHub Actions.
3. Open https://hailey-cezanne.github.io/ in a private browser window.
4. Confirm Showing 16 of 16 projects and both labeled controls are visible.
5. Search for m10a2: one result. Select HTML: zero results with a message.
6. Clear search and choose All Projects: sixteen results again.
7. Test all nine View Project demo links and all seven View Code repository links.
8. Check Console for errors and Network for failed script/style/media requests.
9. View page source: #project-list must still be empty there.

SUBMISSION
Submit the REPOSITORY link to Canvas, as specified by the supplied rubric:
https://github.com/hailey-cezanne/hailey-cezanne.github.io
The instructor opens the live site from that repository.
Set the repository About > Website field to https://hailey-cezanne.github.io/
when publishing; this is helpful housekeeping, not a substitute for a working site.

STATUS
Local code checks passed. Public deployment of this version is still required.
No grade is guaranteed; the instructor assesses the actual public site.
