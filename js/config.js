var config = {
  "live": {
    "service_a1": {
      "endpoint": "http://service_a1.live.my.tld/ping",
    },
    "service_a2": {
      "endpoint": "http://service_a2.live.my.tld/ping",
    },
    "service_b": {
      "endpoint": "http://service_b.live.my.tld/ping",
    },
    "rabbitmq": {
      "endpoint": "https://user:password@rabbitmq.live.my.tld:15672",
      "vhost": "my_vhost",
    },
    "redis": {
      "endpoint": "http://user:password@webdis.live.my.tld",
    }
  },
  "live-legacy": {
    "rabbitmq": {
      "endpoint": "http://user:password@rabbitmq.live.my.tld:15672",
    }
  },
  "staging": {
    "service_a": {
      "endpoint": "http://service_a.staging.my.tld/ping",
    },
    "service_b": {
      "endpoint": "http://service_b.staging.my.tld/ping",
    },
    "service_c": {
      "endpoint": "http://service_c.staging.my.tld/ping",
    },
    "rabbitmq": {
      "endpoint": "https://user:password@rabbitmq.staging.my.tld:15672",
      "vhost": "my_vhost",
    },
    "redis": {
      "endpoint": "http://user:password@webdis.staging.my.tld",
    }
  }
}
