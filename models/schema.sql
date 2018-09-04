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
);

