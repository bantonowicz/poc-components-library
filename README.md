# PocComponentsLibrary

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Opis

1. Jedno repozytorium zawierające różne komponenty (jako biblioteki)
2. Repozytorium wraz paczkami w różnych wersjach w całości na GitHubie
3. Łatwa i szybka praca ze Storybookiem
4. Możliwość instalowania re-używalnych paczek w różnych projektach (różne wersje paczki - w zależności od potrzeb)

Stack technologiczny:
- Angular Libraries (default)
- Github Packages (default)

### Instrukcja

#### Development

Dokładny opis: https://indepth.dev/how-to-build-a-component-library-with-angular-and-storybook/

1. Generujemy workspace Angulara, np. `$ ng new ng-ui --create-application=false`
2. Przehchodzimy do katalogu workspace'a i generujemy przykładową bibliotekę `$ ng g lib button -p ui`
3. Instalujemy Storybooka `$ npx @storybook/cli init`
4. Dodajemy nasza bibliotekę do Storybooka - katalog `stories`
5. Uruchamiamy Storybooka w trybie watch `$ npm run storybook`

#### Github Packages

Wszystkie buildy produkcyjne naszych bibliotek w różnych wersjach są przechowywane na Github Packages.

1. Wrzucamy nasze repozytorium Components Library na Githuba
2. Generujemy token na Github > Settings > Developer Settings > Personal Access Tokens
3. Lokalnie logujemy się do Github Packages `$ npm login --registry=https://npm.pkg.github.com` i jako hasło używamy tokena.

#### Budowanie biblioteki oraz publikacja

Dokładny opis:
https://dev.to/dalenguyen/create-your-first-github-package-564f<br>
https://dev.to/brgrz/create-a-library-with-angular-and-publish-it-to-github-package-registry-1pch

Uzupełniamy `package.json` naszej biblioteki:
- version (każda publikacja musi mieć nową wersję, w przeciwnym razie otrzymamy błąd)
- repository
- publishConfig

Przykład:

```
{
  "name": "button",
  "version": "1.0.4",
  "peerDependencies": {
    "@angular/common": "^10.0.6",
    "@angular/core": "^10.0.6"
  },
  "dependencies": {
    "tslib": "^2.0.0"
  },
  "repository": {
    "type": "git",
    "url": "git+https@github.com:bantonowicz/poc-components-library.git"
  },
  "publishConfig": {
    "registry": "https://npm.pkg.github.com/@bantonowicz"
  }
}
```

1. Budujemy bibliotekę w wersji produkcyjnej, np. `$ ng build button --prod`
2. Przechodzimy do katalogu builda, np. `dist/button`
3. Pakujemy artefakty `$ npm pack`
4. Publikujemy paczkę na Github Packages `$ npm publish`
5. Paczka trafia na Github > Your Repositories > Packages

#### Instalowanie paczki w dowolnym projekcie

1. W katalogu głównym repozytorium projektu dodajemy plik `.npmrc` z wpisem `registry=https://npm.pkg.github.com
` - w tym celu informujemy `npm`, żeby korzystał z Github Packages zamiast domyślnego registry
2. Instalujemy naszą paczkę, np. `$ npm install @bantonowicz/button@1.0.4`

### Źródła:
1. Praca z Angular Libraries i Storybook
https://indepth.dev/how-to-build-a-component-library-with-angular-and-storybook/
2. Tworzenie paczki na Github Package dla np. builda produkcyjnego biblioteki Angulara
https://dev.to/dalenguyen/create-your-first-github-package-564f<br>
https://dev.to/brgrz/create-a-library-with-angular-and-publish-it-to-github-package-registry-1pch
