import { Office } from '@/types/offices-types';
import { useEffect, useState } from 'react';

const useOffice = () => {
  // Initialize state directly from localStorage if available
  const initialOffice = JSON.parse(
    localStorage.getItem('office') || 'null',
  ) as Office | null;
  const [office, setOffice] = useState<Office | null>(initialOffice);

  useEffect(() => {
    // Optionally, sync the localStorage in case it changes outside of this hook's scope
    const storedOffice = JSON.parse(
      localStorage.getItem('office') || 'null',
    ) as Office;
    if (storedOffice !== office) {
      setOffice(storedOffice);
    }
  }, []);

  const defaultOffice = {
    id: 0,
    office_name: '',
    office_code: '',
    location: '',
    is_hidden: false,
    time_stamps: {
      deleted_at: null,
      created_at: '',
      updated_at: '',
    },
  };

  return {
    id: office ? office.id : defaultOffice.id,
    officeName: office ? office.office_name : defaultOffice.office_name,
    officeCode: office ? office.office_code : defaultOffice.office_code,
    location: office ? office.location : defaultOffice.location,
  };
};

export default useOffice;
