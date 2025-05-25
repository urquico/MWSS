// src/hooks/useService.ts
import { ServiceType } from '@/types/services-types';
import { useEffect, useState } from 'react';

const useService = () => {
  // Initialize state directly from localStorage if available
  const initialService = JSON.parse(
    localStorage.getItem('service') || 'null',
  ) as ServiceType | null;
  const [service, setService] = useState<ServiceType | null>(initialService);

  useEffect(() => {
    // Optionally, sync the localStorage in case it changes outside of this hook's scope
    const storedService = JSON.parse(
      localStorage.getItem('service') || 'null',
    ) as ServiceType;
    if (storedService !== service) {
      setService(storedService);
    }
  }, []);

  const defaultService = {
    id: 0,
    service_name: '',
    service_code: '',
    is_hidden: false,
    time_stamps: {
      deleted_at: null,
      created_at: '',
      updated_at: '',
    },
  };

  return {
    id: service ? service.id : defaultService.id,
    serviceName: service ? service.service_name : defaultService.service_name,
    serviceCode: service ? service.service_code : defaultService.service_code,
    isHidden: service ? service.is_hidden : defaultService.is_hidden,
  };
};

export default useService;
