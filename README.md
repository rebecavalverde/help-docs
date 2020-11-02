# Flat Help Documentation

This repository contains the help documentation available at (https://flat.io/help).
The issues in this repository are reserved for the documentation itself. If you have any questions or feedback, please send [send us an email or chat with our team](https://flat.io/support).


## Run locally with Docker

```bash
docker run --rm -v "$PWD:/app" -p 4000:4000 -it ruby:2.6 bash -c "cd /app && bundle install && bundle exec jekyll serve --host 0.0.0.0"
```

## Run locally without Docker

```bash
bundle install
bundle exec jekyll serve
# Open your web browser at http://127.0.0.1:4000/help/
```

## License

Copyright © 2020 Tutteo Limited