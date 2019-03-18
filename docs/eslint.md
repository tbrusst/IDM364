# ESLint

- [https://eslint.org](https://eslint.org)

Projects created using Create React App have linting with ESLint already working and configured out of the box with sensible defaults. For most scenarios that means that you don’t have anything else to do and everything will just work.

## Global Installation

Globally install ESLint on your system:

```bash
npm install -g eslint
```

## Check Installed Version Number

```bash
eslint -v
```

## Global Configuration File

You can choose to setup configuration files for how eslint will lint your files. ESLint will first look in your project folder for a configuration file. If it does not fine one, it will then look in your home directory (`~/.eslintrc` or `C:\Users\username\.eslintrc`).

- [Official Configuration Documentation](https://eslint.org/docs/user-guide/configuring#using-configuration-files)