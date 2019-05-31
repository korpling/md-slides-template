PANDOC_FLAGS=\
	-t revealjs -s --filter pandoc-citeproc --template=templates/default.revealjs

SRC_FILES := $(wildcard *.md)
SRC_FILES := $(filter-out README.md, ${SRC_FILES})


all: $(patsubst %.md,%.html, ${SRC_FILES})

self: $(patsubst %.md,%.self.html, ${SRC_FILES})

%.html: %.md
	pandoc ${PANDOC_SELFCONTAINED_FLAGS} ${PANDOC_FLAGS} $< -o $@

%.self.html: %.md
	pandoc --self-contained ${PANDOC_FLAGS} $< -o $@	

css:
	sass reveal.js/css/theme/humboldt.scss reveal.js/css/theme/humboldt.css 

clean:
	rm -f *.html

.PHONY: all clean self
