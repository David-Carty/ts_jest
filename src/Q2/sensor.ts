type SensorReading = {
    timestamp: string;   // ISO format
    sensorId: number;
    sensorType: "air" | "humidity" | "temperature";
    sensorValue: number;
};

const getLatestReadings = (readings: SensorReading[]): { [sensorId: number]: SensorReading } => {
    const latestReadings: { [sensorId: number]: SensorReading } = {};

    readings.forEach(reading => {
        if (!latestReadings[reading.sensorId] || new Date(reading.timestamp) > new Date(latestReadings[reading.sensorId].timestamp)) {
            latestReadings[reading.sensorId] = reading;
        }
    });

    return latestReadings;
}

export { SensorReading, getLatestReadings };