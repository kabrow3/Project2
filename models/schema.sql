<<<<<<< HEAD
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
=======
-- DROP DATABASE IF EXISTS exampledb;
-- CREATE DATABASE events_db

create database events_db;
/*use events_db;
DROP TABLE EVENT;*/
use events_db;
CREATE TABLE Events
(
  Event_ID INTEGER NOT NULL auto_increment, 
  Event_Name VARCHAR(50),  -- FK   
  Event_Location VARCHAR(150),  -- FK
  Event_Date DATETIME,
  PRIMARY KEY(Event_ID)
>>>>>>> feb5c1df9acc185cd6a1da6988ff27a7d80835cd
);

