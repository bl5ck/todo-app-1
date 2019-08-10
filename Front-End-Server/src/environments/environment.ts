// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  domain: {
    user: 'http://localhost:5000/todo-app-server-834d3/us-central1/App/userAuth',
    weather: 'https://api.openweathermap.org/data/2.5/find?units=metric&appid=85e3470a63c593af3034af2e8513e04f&q='
  }
};
