/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
        // url: 'postgresql://ai%20mock%20interview_owner:aQ7GxFrR2qHj@ep-quiet-hat-a5sn0e5z.us-east-2.aws.neon.tech/ai-mock-interview?sslmode=require',
        url: 'postgresql://eloqifydb_owner:hTKraj9L3uiM@ep-lingering-leaf-a5i7txzg.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require',
    }
};

// # NEXT_PUBLIC_DRIZZLE_DB_URL=postgresql://eloqifydb_owner:hTKraj9L3uiM@ep-lingering-leaf-a5i7txzg.us-east-2.aws.neon.tech/eloqifydb?sslmode=require
// # NEXT_PUBLIC_GOOGLE_API_KEY=442454421627-qv9itmb10erf67r6qtf1q3sbmsm718kc.apps.googleusercontent.com
// # NEXT_PUBLIC_GOOGLE_API_KEY=AIzaSyCeur3ql4vgLbZr4JeHhbbunDVDxgJ1RSs