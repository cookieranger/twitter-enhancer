# Steps

> yarn

> bundle install

> bundle exec rake db:create db:migrate db:seed

> foreman start -p 3002

**open up `http://localhost:3002`, you can search by space delimited `title`, `hashtags` or `content`**

### e.g.

```
Search: jakku soluta
```

will match

```
this is a fake sentence, **_soluta_**. **_#Jakku_**
```
