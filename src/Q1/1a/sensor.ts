type SensorReading = {
    timestamp: string;   // ISO format
    sensorId: number;
    sensorType: "air" | "humidity" | "temperature";
    sensorValue: number;
};

const getReadingsBySensorId = (sensorId: number, readings: SensorReading[]): SensorReading[] => 
    readings.filter(reading => reading.sensorId === sensorId);

export { SensorReading, getReadingsBySensorId };