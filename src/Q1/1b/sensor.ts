type SensorReading = {
    timestamp: string;   // ISO format
    sensorId: number;
    sensorType: "air" | "humidity" | "temperature";
    sensorValue: number;
};

async function getReadingsBySensorId(sensorId: number, readingsPromise: Promise<SensorReading[]>): Promise<SensorReading[]> {
    try {
        const readings = await readingsPromise;
        return readings.filter(reading => reading.sensorId === sensorId);
    } catch (error) {
        if (error instanceof Error) {
            console.error(`Failed to fetch readings: ${error.message}`);
        } else {
            console.error('Failed to fetch readings:', error);
        }
        return [];
    }
}

export { SensorReading, getReadingsBySensorId };