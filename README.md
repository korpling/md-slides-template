# Prerequisites

Install Pandoc (https://pandoc.org/) for converting the markdown files to HTML.
You can optionally install pandoc-watch (https://github.com/dloureiro/pandoc-watch) if you want to generate the slides in the background whenever the markdown file changes.

# Compiling the slides

You can 
* execute pandoc manually on the command line, 
* use the predefined VS Code tasks, or 
* use `make`.

## `make`

The command
```
make
```
will compile all markdown files (`.md`) ending to HTML files with the same name.

You can remove the compiled HTML files with
```
make clean
```

To recompile the CSS after changing the `reveal.js/css/theme/humboldt.scss` file execute
```
make css
```

The generated HTML files will compile fast, but need the whole repository (including the images, CSS and JavaScript) to work properly. 
To create a self-contained version, which only needs the HTML itfself call
```
make self
```
This will be much slower, but the generated `.self.html` file can be copied and
used independently of the rest of the files.