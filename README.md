# Course Window Settings

An extension to set the course window size and/or position when it launches. Useful if the course is running from an LMS that doesn't allow you to change the size of the course window.

## Installation

* Add the [example JSON](example.json) to `config.json`.
* With [Adapt CLI](https://github.com/adaptlearning/adapt-cli) installed, run `adapt install courseWindowSettings`. Alternatively, download the ZIP and extract into the src > extensions directory.
* Run an appropriate Grunt task.

## Usage

## Settings
>**_isEnabled** (boolean): Enables/disables the extension.

>**_restrictTo** (string): Allows you to specify when this extension will kick in by supplying a page name or comma-separated list of page names. For example, if you only wanted the window to be resized when launched from the LMS, set this to `"index_lms.html"`. 

>**_resizeTo** (string): The width and height you'd like the browser window to be resized to, in the format `"width,height"` i.e. `"1024,768"`. If you want the browser window to be resized so that it completely fills the available screen space, set this to `"availWidth,availHeight"`,

>**_moveTo** (string): The x and y coordinates you'd like the browser window to be moved to, in the format `"x,y"` i.e. `"0,0"`. Note that if the user is running multiple monitors, these coordinates are relative to the monitor the course window is displayed in.

##Limitations
Chrome and Firefox will not allow a window to be moved or resized unless it was opened via `window.open`. Internet Explorer v11 will allow this, but *only* if there are no other tabs open in the current window. The Edge browser seems not to allow `window.moveTo` and does not seem to like `window.resizeTo(screen.availWidth, screen.availHeight)` though it will do `window.resizeTo(screen.availWidth-40, screen.availHeight-40);` - this needs further investigation.

Obviously this extension will have no impact whatsoever on browsers like Safari for iOS or Chrome for Android that always open windows in a fixed size & position. 

Finally, it should be noted that Firefox allows users to disallow any form of window resize or move by setting `dom.disable_window_move_resize` to `true` in the Firefox config.