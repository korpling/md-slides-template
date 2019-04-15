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

You can remove the files with
```
make clean
```

