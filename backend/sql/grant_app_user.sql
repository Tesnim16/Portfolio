-- Execute this in phpMyAdmin using an admin account.
-- This creates an application user allowed to connect from any host (including Docker bridge hosts).

CREATE USER IF NOT EXISTS 'eportfolio_user'@'localhost' IDENTIFIED BY 'admin';
CREATE USER IF NOT EXISTS 'eportfolio_user'@'%' IDENTIFIED BY 'admin';
CREATE USER IF NOT EXISTS 'eportfolio_user'@'172.17.0.1' IDENTIFIED BY 'admin';

ALTER USER 'eportfolio_user'@'localhost' IDENTIFIED BY 'admin';
ALTER USER 'eportfolio_user'@'%' IDENTIFIED BY 'admin';
ALTER USER 'eportfolio_user'@'172.17.0.1' IDENTIFIED BY 'admin';

GRANT ALL PRIVILEGES ON eportfolio.* TO 'eportfolio_user'@'localhost';
GRANT ALL PRIVILEGES ON eportfolio.* TO 'eportfolio_user'@'%';
GRANT ALL PRIVILEGES ON eportfolio.* TO 'eportfolio_user'@'172.17.0.1';
FLUSH PRIVILEGES;
