import { betterAuth } from "better-auth";
import { MongoClient } from "mongodb";
import { mongodbAdapter } from "better-auth/adapters/mongodb";

const client = new MongoClient("mongodb+srv://mdmohiburrahmanmanik_db_user:zaWhcYoMBqLtwUjp@cluster0.ifhtaoi.mongodb.net/?appName=Cluster0");
const db = client.db('online-book-borrowing');

export const auth = betterAuth({
    database: mongodbAdapter(db, { client }),
    emailAndPassword: { enabled: true, autoSignIn: false },
    socialProviders: {
        google: {
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        },
        github: {
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET,
        },
    },
});