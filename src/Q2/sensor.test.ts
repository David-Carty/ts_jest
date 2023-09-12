import { SensorReading,getLatestReadings } from './sensor';

describe('getLatestReadings', () => {
    const testReadings: SensorReading[] = [
        {
            sensorId: 1,
            timestamp: '2023-08-20T12:52:46.000Z',
            sensorType: 'air',
            sensorValue: 4 
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
        },
        {
            sensorId: 2,
            timestamp: '2023-08-20T12:52:47.000Z',
            sensorType: 'humidity',
            sensorValue: 3 
        }
    ];

    it('should return the latest reading for each sensor id', () => {
        const expectedOutput = {
            1: {
                sensorId: 1,
                timestamp: '2023-08-20T12:52:48.775Z',
                sensorType: 'temperature',
                sensorValue: 5 
            },
            2: {
                sensorId: 2,
                timestamp: '2023-08-20T12:52:47.000Z',
                sensorType: 'humidity',
                sensorValue: 3 
            }
        };

        const result = getLatestReadings(testReadings);
        expect(result).toEqual(expectedOutput);
    });
});