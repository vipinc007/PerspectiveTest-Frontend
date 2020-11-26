const SAMS_API_URL = "https://sams-api-dev.herokuapp.com/";
const SAMS_SSO_URL = "https://sams-sso-dev.compat.io/landing";
// const SAMS_SSO_URL = "https://compatio-sso.herokuapp.com/landing";

const SLACK_NOTIFICATION_WEBHOOK =
  "https://hooks.slack.com/services/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";
const APP_ENVIRONMENT = "DEV";
const LOGS_ENABLED = true;
const SLACK_NOTOFICATION_ENABLED = true;
const SERVER_ENVIRONMENTS = [
  {
    id: 1,
    name: "Dev",
    btnClass: "btn btn-sm btn-outline-primary",
    badgeClass: "badge badge-light border border-primary",
  },
  {
    id: 2,
    name: "Qa",
    btnClass: "btn btn-sm btn-outline-success",
    badgeClass: "badge badge-light border border-success",
  },
  {
    id: 0,
    name: "Prod",
    btnClass: "btn btn-sm btn-outline-danger",
    badgeClass: "badge badge-light border border-danger",
  },
  // { id: 2, name: "Stage" },
];

export default {
  SAMS_API_URL: SAMS_API_URL,
  APP_ENVIRONMENT: APP_ENVIRONMENT,
  LOGS_ENABLED: LOGS_ENABLED,
  SERVER_ENVIRONMENTS: SERVER_ENVIRONMENTS,
  SAMS_SSO_URL: SAMS_SSO_URL,
  SLACK_NOTIFICATION_WEBHOOK: SLACK_NOTIFICATION_WEBHOOK,
  SLACK_NOTOFICATION_ENABLED: SLACK_NOTOFICATION_ENABLED,
};
