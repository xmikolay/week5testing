import { TestBed } from '@angular/core/testing';
import { describe, it, expect } from 'vitest';
import { Testservice } from './testservice';

describe('Testservice', () => {
  let service: Testservice;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Testservice);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('fullName', () => {
    it('should return "lastName firstName" format', () => {
      const result = service.fullName('John', 'Doe');
      expect(result).toBe('Doe John');  
    });

    it('should handle empty strings', () => {
      const result = service.fullName('', '');
      expect(result).toBe(' ');
    });
  });

  describe('compute', () => {
    it('should return the number when positive', () => {
      const result = service.compute(5);
      expect(result).toBe(5);
    })

    it('should return 0 when negative', () => {
      const result = service.compute(-5);
      expect(result).toBe(0);
    })

    it('should return 0 when 0', () => {
      const result = service.compute(0);
      expect(result).toBe(0);
    })
  })
});
