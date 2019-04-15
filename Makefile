PANDOC_FLAGS=\
	-t revealjs -s --filter pandoc-citeproc --template=templates/default.revealjs

SRC_FILES := $(wildcard *.md)
SRC_FILES := $(filter-out README.md, ${SRC_FILES})
all: $(patsubst %.md,%.html, ${SRC_FILES})

%.html: %.md
	pandoc ${PANDOC_FLAGS} -i $< -o $@

clean:
	rm -f *.html
