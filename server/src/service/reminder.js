import mysql from 'mysql2';

import pool from '../db.js';

export const postReminder = async ({message}) => {
    const query = `INSERT INTO reminders (value) VALUES ('${message}')`;

    const [rows] = await pool.promise().query(query);

    return rows;
}

export const getReminder = async ({message}) => {
    const query = `select * from reminders where isDeleted = 0;`;

    const [rows] = await pool.promise().query(query);

    return rows;
}