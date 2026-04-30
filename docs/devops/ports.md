### Ports for DevOps Engineers

## 🔑 Common Ports

| Service               | Port        | Notes                      |
| --------------------- | ----------- | -------------------------- |
| HTTP                  | 80          | Unsecured web traffic      |
| HTTPS                 | 443         | Secure web (TLS/SSL)       |
| SSH                   | 22          | Remote server access       |
| FTP                   | 21          | File transfer (legacy)     |
| MySQL                 | 3306        | Database                   |
| PostgreSQL            | 5432        | Database                   |
| MSSQL                 | 1433        | Database                   |
| MongoDB               | 27017       | NoSQL database             |
| Redis                 | 6379        | In-memory cache            |
| Memcached             | 11211       | Distributed cache          |
| Cassandra             | 9042        | NoSQL database             |
| Elasticsearch         | 9200        | Search API                 |
| InfluxDB              | 8086        | Time-series database       |
| Kubernetes API Server | 6443        | Cluster control            |
| etcd                  | 2379/2380   | Key-value store (2379 client, 2380 peer) |
| Zookeeper             | 2181        | Coordination service       |
| Docker API            | 2375 / 2376 | 2376 is secure (TLS)       |
| Docker Registry       | 5000        | Container registry         |
| NGINX                 | 80 / 443    | Web server / reverse proxy |
| Apache Tomcat         | 8080        | Java application server    |
| Grafana               | 3000        | Monitoring dashboard       |
| Prometheus            | 9090        | Metrics monitoring         |
| Kibana                | 5601        | Elasticsearch dashboard    |
| Logstash              | 5044/9600   | Log processing (5044 beats, 9600 monitoring) |
| Fluentd               | 24224       | Log collector              |
| Apache Kafka          | 9092        | Messaging system           |
| RabbitMQ              | 5672/15672  | Message broker (5672 AMQP, 15672 management) |
| Jenkins               | 8080        | CI/CD tool                 |
| GitLab                | 80/443      | DevOps platform            |
| Nexus Repository      | 8081        | Artifact repository        |
| Artifactory           | 8081        | Artifact repository        |
| SonarQube             | 9000        | Code quality               |
| Jira                  | 8080        | Issue tracking             |
| Confluence            | 8090        | Documentation/wiki         |
| Bitbucket             | 7990        | Git repository hosting     |
| Consul                | 8500        | Service discovery          |
| HashiCorp Vault       | 8200        | Secrets management         |
| Splunk                | 8000/8089   | Log analysis (8000 web, 8089 management) |
| Nagios                | 5666        | Monitoring                 |
| Zabbix                | 10050/10051 | Monitoring (10050 agent, 10051 server) |
| Harbor                | 80/443/4443 | Container registry (4443 notary) |
| RDP                   | 3389        | Remote desktop             |
| VNC                   | 5900        | Remote desktop             |
| SMTP                  | 25          | Email sending              |
| DNS                   | 53          | Domain name resolution     |
| NTP                   | 123         | Network time protocol      |
| SNMP                  | 161         | Network monitoring         |
| Syslog                | 514         | System logging             |
| LDAP                  | 389/636     | Directory services (636 LDAPS) |
| NFS                   | 2049        | Network file system        |
| Git                   | 9418        | Git protocol               |
| SVN                   | 3690        | Subversion                 |

---

## 💡 Quick Memory Guide

* 🌐 Web → `80`, `443`
* 🔐 Access → `22 (SSH)`, `3389 (RDP)`, `5900 (VNC)`
* ⚙️ DevOps Tools → `8080`, `3000`, `9090`, `9000`
* 🗄️ Databases → `3306`, `5432`, `27017`, `6379`, `11211`
* ☸️ Kubernetes → `6443`, `2379/2380`, `2181`
* 📦 Containers → `2375/2376`, `5000`
* 📊 Monitoring → `9090`, `3000`, `5601`, `8000`
* 🔄 CI/CD → `8080`, `8081`, `9000`
* 📝 Collaboration → `7990`, `8080`, `8090`
* 🔒 Security → `8200`, `8500`
* 📡 Infrastructure → `53`, `123`, `161`, `514`, `2049`

---
