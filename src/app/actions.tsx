"use server"

import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'epm'
})

export async function fetchWorkers() {
    try {
        return connection.query('SELECT * FROM `workers`')
    } catch(err) {
        return { message: 'Something went wrong while fetching workers.'}
    }
}