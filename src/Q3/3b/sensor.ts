type SensorReading = {
  id: number;
  sensorType: 'air' | 'humidity' | 'temperature';
  sensorValue: number;
  timestamp: string;
};

const WAIT_TIME_MS = 500;  
const AIR_THRESHOLD = 12;  
const HUMIDITY_THRESHOLD = 1;  
const TEMPERATURE_THRESHOLD = 25;  

const getMockReadings = async (): Promise<SensorReading[]> => {
  await new Promise(res => setTimeout(res, WAIT_TIME_MS));
  return [
    {
      id: 1,
      sensorType: 'air',
      sensorValue: 14,
      timestamp: '2023-08-20T12:52:48.775Z'
    },
    {
      id: 2,
      sensorType: 'humidity',
      sensorValue: 0.8,
      timestamp: '2023-08-22T12:52:48.775Z'
    },
    {
      id: 3,
      sensorType: 'temperature',
      sensorValue: 21,
      timestamp: '2023-08-23T12:52:48.775Z'
    }
  ];
};

const checkReadingThreshold = (reading: SensorReading): void => {
  switch (reading.sensorType) {
    case 'air':
      if (reading.sensorValue > AIR_THRESHOLD) {  
        console.error("Air value has exceeded threshold");
      }
      break;
    case 'humidity':
      if (reading.sensorValue > HUMIDITY_THRESHOLD) {  
        console.error("Humidity value has exceeded threshold");
      }
      break;
    case 'temperature':
      if (reading.sensorValue > TEMPERATURE_THRESHOLD) {  
        console.error("Temperature value has exceeded threshold");
      }
      break;
  }
};

const checkUpperThresholds = async (): Promise<void> => {
  try {
    const allSensorReadings: SensorReading[] = await getMockReadings();
    for (const reading of allSensorReadings) {
      checkReadingThreshold(reading);
    }
  } catch (error) {
    console.error("Failed to retrieve sensor readings:", error);
  }
};

export { SensorReading, getMockReadings, checkReadingThreshold, checkUpperThresholds };