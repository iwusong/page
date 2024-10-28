DROP TABLE IF EXISTS activity_record;
CREATE TABLE IF NOT EXISTS activity_record
(
    id            INTEGER PRIMARY KEY,
    user          TEXT,
    activity      TEXT,
    activity_type TEXT,
    create_time   INTEGER,
    time          INTEGER,
    is_delete     INTEGER,
    main_id       INTEGER,
    patch_id      INTEGER
);
