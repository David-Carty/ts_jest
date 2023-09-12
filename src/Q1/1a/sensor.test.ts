import { SensorReading, getReadingsBySensorId } from './sensor';

describe('Sensor', () => {
    const testReadings: SensorReading[] = [
        {
            sensorId: 1,
            timestamp: '2023-08-20T12:52:48.775Z',
            sensorType: 'air',
            sensorValue: 5 
        },
        {
            sensorId: 2,
            timestamp: '2023-08-20T12:52:46.442Z',
            sensorType: 'humidity',
            sensorValue: 2 
        },
        {
            sensorId: 1,
            timestamp: '2023-08-20T12:52:48.775Z',
            sensorType: 'temperature',
            sensorValue: 5 
        }
    ];

    it('should return readings that match the given sensor id', () => {
        const expectedOutput: SensorReading[] = [
            {
                sensorId: 2,
                timestamp: '2023-08-20T12:52:46.442Z',
                sensorType: 'humidity',
                sensorValue: 2 
            }
        ];

        expect(getReadingsBySensorId(2, testReadings)).toEqual(expectedOutput);
    });
});