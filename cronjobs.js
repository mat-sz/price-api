const CronJob = require('cron').CronJob;
const tasks = require('./tasks');

function initialize() {
    tasks.map((task) =>
        new CronJob(task.cronTime, task.function, null, true, 'UTC', this, task.autorun)
    );
}

module.exports = initialize;