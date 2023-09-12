import { getMockReadings, checkReadingThreshold, checkUpperThresholds, SensorReading } from './sensor';

describe('Sensor Functions', () => {

  describe('getMockReadings', () => {
    it('should return mock readings after a delay', async () => {
      const readings = await getMockReadings();
      expect(readings).toHaveLength(3);
      expect(readings[0].sensorType).toBe('air');
      expect(readings[1].sensorType).toBe('humidity');
      expect(readings[2].sensorType).toBe('temperature');
    });
  });

  describe('checkReadingThreshold', () => {
    it('should console error when threshold is exceeded', () => {
      console.error = jest.fn(); // Mock console.error

      const airReading: SensorReading = {
        id: 1,
        sensorType: 'air',
        sensorValue: 13,
        timestamp: '2023-08-20T12:52:48.775Z'
      };

      checkReadingThreshold(airReading);
      expect(console.error).toHaveBeenCalledWith('Air value has exceeded threshold');

      const humidityReading: SensorReading = {
        id: 2,
        sensorType: 'humidity',
        sensorValue: 1.1,
        timestamp: '2023-08-22T12:52:48.775Z'
      };

      checkReadingThreshold(humidityReading);
      expect(console.error).toHaveBeenCalledWith('Humidity value has exceeded threshold');
    });
  });

  describe('checkUpperThresholds', () => {
    it('should check each reading', async () => {
      const mockReadings: SensorReading[] = [{
        id: 1,
        sensorType: 'air',
        sensorValue: 13,
        timestamp: '2023-08-20T12:52:48.775Z'
      }];

      // Mocking getMockReadings to return controlled mockReadings
      (getMockReadings as jest.Mock) = jest.fn().mockResolvedValue(mockReadings);
      console.error = jest.fn(); // Mock console.error

      await checkUpperThresholds();
      expect(console.error).toHaveBeenCalledWith('Air value has exceeded threshold');
    });
  });
});