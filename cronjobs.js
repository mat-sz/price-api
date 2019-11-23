const CronJob = require('cron').CronJob;
const tasks = require('./tasks');

module.exports = () => {
    tasks.map((task) =>
        new CronJob(task.cronTime, task.function, null, true, 'UTC', this, task.autorun)
    );
};