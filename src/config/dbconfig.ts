import mongoose, { ConnectOptions } from "mongoose";

const DB_NAME = process.env.DB_NAME || "azure-node-graph";
const DB_USERNAME = process.env.DB_USERNAME || "nitya-tech-cosmos";
const DB_PASSWORD = process.env.DB_PASSWORD || "p3Ak7x7loYehq7OVGaseu4Wv1gTuKSVJDlLsMB1278iXdRAHTo230WT6WMtQeSaM18bCb1tbziLEACDb7vqYBg==";
const DB_HOST = process.env.DB_HOST || "nitya-tech-cosmos.mongo.cosmos.azure.com";
const DB_PORT = process.env.DB_PORT || "10255";

const url = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}?ssl=true`;

console.log(url);


if (!DB_HOST) {
    console.error("DB_URI not found in environment variables!");
    process.exit(1);
}

mongoose.connection.on("connected", () => {
    console.log("Connected to database", DB_NAME);
});

mongoose.connection.on("error", (err) => {
    console.error(`Database connection error: ${err}`);
    process.exit(1);
});

mongoose.connection.on("disconnected", () => {
    console.log("Disconnected from database");
});

const connectToDb = async (): Promise<void> => {
    try {
        const options: ConnectOptions = {
            auth: {
                username: DB_USERNAME,
                password: DB_PASSWORD
            },
            retryWrites: false
        };
        await mongoose.connect(url, options as any).then(res => console.log(`dbconfig: connected to cosmos DB - mongogAPI: ${url}`));
    }
    catch (error) {
        console.error("Error connecting to MongoDB:", error);
        process.exit(1);
    }
};

export default connectToDb;