# rspack-repro

- clone repo
- run yarn
- run yarn build

## Output

```
yarn run v1.22.22
$ rspack build
Panic occurred at runtime. Please file an issue on GitHub with the backtrace below: https://github.com/web-infra-dev/rspack/issues
Message:  user-provided comparison function does not correctly implement a total order
Location: core/src/slice/sort/shared/smallsort.rs:860

Backtrace omitted.

Run with RUST_BACKTRACE=1 environment variable to display it.
Run with RUST_BACKTRACE=full to include source snippets.
Aborted (core dumped)
error Command failed with exit code 134.
info Visit https://yarnpkg.com/en/docs/cli/run for documentation about this command.

```
