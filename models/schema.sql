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



DROP DATABASE IF EXISTS rideshare_db;
CREATE DATABASE rideshare_db;

CREATE TABLE IF NOT EXISTS rideshare_db.ride
(
  riderId INT NOT NULL,
  driverId INT NOT NULL,
  email VARCHAR(50) NULL ,
  confirmed TINYINT NULL DEFAULT 0,
  startLocation VARCHAR(50) NULL,
  endLocation VARCHAR(50) NULL,
  numSeats INT NULL DEFAULT 0,
  departureTime VARCHAR(50) NULL,
  created TIMESTAMP NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (riderId) 
);

