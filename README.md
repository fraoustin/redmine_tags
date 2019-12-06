# Redmine Tags Plugin


## Plugin installation

1. Copy the plugin directory into the vendor/plugins directory
2. Restart Redmine

with a Dockerfile

```
   FROM redmine
   WORKDIR /usr/src/redmine/plugins
   RUN git clone https://github.com/fraoustin/redmine_tags.git
   WORKDIR /usr/src/redmine/
```
 

## Usage

which can be used into description of issue:

```
   {{tags(tag1 tag2)}}

```

## License

This plugin is released under the GPLv2.
