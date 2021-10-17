import sql from 'mssql'

const dbSettings = {
    user: 'gorila',
    password: '123gorila',
    server: 'localhost',
    database: 'webstore',
    options:{
        encrypt: true,
        trustServerCertificate: true,
    }
}

export async function getConnection(){
    try {
        const pool = await sql.connect(dbSettings);
        return pool;   
    } catch (error) {
        console.error(error);   
    }
}

export {sql}