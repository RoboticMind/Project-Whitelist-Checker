# Project-Whitelist-Checker
Checks if a BOINC project can be added to the Gridcoin whitelist (by stats requirements) or if a whitelisted project should be greylisted.

Use by going to the "last 40 days" stats for a project on BOINCStats (as bookmark you will also need to click the bookmark there too)

Note: this can only check zero credit days and work availability score. There are other
requirements that this cannot check

# Browser Extension

For Firefox users: you can install by going to [the addon store page for this extension here](https://addons.mozilla.org/en-US/firefox/addon/whitelist-requirement-checker/)

For Chrome users: you can either:
* use the bookmark version 
* (not recommended in general for security reasons) clone/download this repo,  go to `chrome://extensions`, enable developer mode, and click load unpacked selecting the folder of the clone
# Bookmark

Go to the [bookmark_version.js file](bookmark_version.js) and copy it ([may be easier to copy from the raw file](https://raw.githubusercontent.com/RoboticMind/Project-Whitelist-Checker/main/bookmark_version.js)). Create a bookmark using that entire text as if it were a link. 

# Screenshots

## Example Passing Both Checks
![Screenshot showing two green banners above a table of the 40 day stats](screenshots/einstein-at-home-example.png)

## Example Failing One Check
![Screenshot showing one green banner and one red banner above the table of the 40 day stats](screenshots/gpugrid-example.png)