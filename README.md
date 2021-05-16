# Localization Study for Sugarizer v2

The idea of this study is to improve handling of localization in Sugarizer.

More precisely the idea is to:

* Use a new Javascript localization library: the current one - [webL10n](https://github.com/fabi1cazenave/webL10n) - is deprecated since 2015
* Avoid the need to use a pivot file format to localize content in [Sugarizer Weblate platform](https://translate.sugarizer.org): current localization format is .INI but .PO is use as intermediate format in Weblate
* Split languages in different files: currently all localizations are located in a huge file (260kb) that is not good for performance reason.


## Platform

The chosen localization framework for this study is [i18next](https://github.com/i18next/i18next).

This framework is independent from any Javascript framework, largely supported and easy to use.


## Live testing

To test the new feature, this study come with a HTML test page.

You could test it [here](https://llaske.github.io/l10nstudy/).



## Migration process

To simplify the migration from Sugarizer v1 locale to Sugarizer v2 locale, an example of migration tool call `ini2json` is provided with this study. To launch the tool, run:

```
node ini2json.js locale.ini
```
