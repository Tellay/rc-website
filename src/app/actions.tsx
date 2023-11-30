"use server"

import mysql from 'mysql2'

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'epm'
})

interface Worker {
    NAME: string
    PHONE: string
    EMAIL: string
    DEPARTMENT: string    
}

export async function fetchWorkers() {
    return new Promise<Worker[]>((resolve, reject) => {
        const sql = "SELECT * FROM `workers`"
        connection.query(sql, (error: any, results: any) => {
            if(error) {
                reject(error)
            }

            const workers = []

            for(let i = 0; i < results.length; i++) {
                workers.push(results[i])
            }

            resolve(workers)
        })
    })
}