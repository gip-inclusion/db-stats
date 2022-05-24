require('dotenv').config();

const DEFAULT_RESPONSE_TIME_QUERY = 'SELECT pg_sleep(1)';
const DEFAULT_PROGRESS_SCHEDULE = '0 */10 * * * *';

function _isFeatureEnabled(valueString) {
  return valueString === 'yes';
}

module.exports = {
  SCALINGO_REGION: process.env.SCALINGO_REGION,
  SCALINGO_APP: process.env.SCALINGO_APP,
  SCALINGO_TOKEN: process.env.SCALINGO_TOKEN,
  FT_METRICS: _isFeatureEnabled(process.env.FT_METRICS),
  FT_STATEMENTS: _isFeatureEnabled(process.env.FT_STATEMENTS),
  FT_RESPONSE_TIME: _isFeatureEnabled(process.env.FT_RESPONSE_TIME),
  FT_PROGRESS: _isFeatureEnabled(process.env.FT_PROGRESS),
  METRICS_SCHEDULE: process.env.METRICS_SCHEDULE,
  STATEMENTS_SCHEDULE: process.env.STATEMENTS_SCHEDULE,
  RESPONSE_TIME_SCHEDULE: process.env.RESPONSE_TIME_SCHEDULE,
  RESPONSE_TIME_QUERY: process.env.RESPONSE_TIME_QUERY || DEFAULT_RESPONSE_TIME_QUERY ,
  PROGRESS_SCHEDULE: process.env.PROGRESS_SCHEDULE || DEFAULT_PROGRESS_SCHEDULE,
};
