

# Sample Nest-AutoMapper error reproduce repository

This project was generated using [Nx](https://nx.dev).

This repository was created to reproduce the error of [@Automapper/core](https://github.com/nartc/mapper) in version `8.7.1`. The error is about the `typeConverter` method was behave incorrectly. The incedent was reported to the author of the package at [this facebook post](https://www.facebook.com/groups/AngularVietnam/posts/1431356550696525).

The solution is to simply bump-up the new version (to `8.7.2`).
