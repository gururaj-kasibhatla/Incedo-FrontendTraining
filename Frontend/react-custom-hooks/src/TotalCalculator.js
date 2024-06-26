import { useEffect } from 'react';

const useCalculate = (m1, m2, m3, m4, m5) => {
    useEffect(() => {
    }, [m1, m2, m3, m4, m5]);

    // Calculate total
    const total = m1 + m2 + m3 + m4 + m5;

    return total;
};

export default useCalculate;
