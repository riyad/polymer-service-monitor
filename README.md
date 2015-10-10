Service Monitor
===============

This is a simple tool for keeping tabs on the services you're running.

# Available Elements

* `api-status`: call an HTTP endpoint and see if it is reachable
* `queued-messages`: Plots the number of messages in a RabbitMQ queue.
* `rabbitmq-consumer-status`: Find out how many messages are queued on a specific RabbitMQ queue, if it has any consumers or whether they're hung.
* `redis-consumer-status`: Find out if there are clients subscribed to patterns (via [PUBSUB NUMPAT](http://redis.io/commands/pubsub#codepubsub-numpatcode)) on a Redis server. **Note:** this expects you to run [Webdis](http://webd.is/).
* `timeout-queues`: Count the number of RabbitMQ queues with a common prefix and possibly being clustered into a set of "generations" (also with a common prefix).

## Low-Level Elements

* `flot-sparklines`: Draw sparklines with [polymer-flot](https://riyad.github.io/polymer-flot) (from https://gist.github.com/riyad/d572df0067ba947cd225)
* `flot-sparklines-legend`: Show the current value (actually the sum of current values) of a [Flot data series](https://github.com/flot/flot/blob/master/API.md#data-format). If necessary it'll also show the minimum and maximum values from the data series.


# Install

```
git clone https://github.com/riyad/polymer-service-monitor
cd polymer-service-monitor
bower install
```


# Run

Start your favorite browser in a mode where it doesn't care for cross domain requests.

## Vulcanize

```
npm install -g vulcanize
vulcanize index.html > index-vulcanized.html
open index-vulcanized.html
```

## Chrome
You can find a prepared command for Chrome in this Gist: https://gist.github.com/riyad/7553003
Copy the command into your shell or install the ZSH plugin and then run.

`chrome-unsafe index.html`


# To Do

* Make data gathered persistent across reloads (localStorage)
* Allow to control the time window displayed in elements with graphs
* Notifications
