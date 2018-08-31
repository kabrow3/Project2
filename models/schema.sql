DROP DATABASE IF EXISTS events_db;
CREATE DATABASE events_db;

CREATE TABLE IF NOT EXISTS events_db.events
(
  event_id INTEGER NOT NULL auto_increment, 
  event_name VARCHAR(50),   
  event_location VARCHAR(50),  
  event_date DATETIME,
  PRIMARY KEY(event_id)
);

