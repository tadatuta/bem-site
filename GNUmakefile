.DEFAULT_GOAL :=

NODE_MODULES := ./node_modules/

BEM := $(NODE_MODULES).bin/bem
NPM := npm

ifneq (,$(findstring B,$(MAKEFLAGS)))
	BEM_FLAGS := --force
endif

all:: $(BEM) make

.PHONY: server
server:: $(BEM)
	@$(BEM) server

.PHONY: make
make:: $(BEM)
	$(if $(findstring GNUmakefile,$@),,$(BEM) $@ $(BEM_FLAGS))

$(BEM):: $(NODE_MODULES)

$(NODE_MODULES)::
	$(debug ---> Updating npm dependencies)
	@$(NPM) install

.PHONY: clean
clean::
	$(BEM) make -m clean
