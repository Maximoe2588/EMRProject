

const BASE_URL = 'http://localhost:3000/api';

export const createPrimaryConcern = async (primaryConcern, token) => {
    const response = await fetch(`${BASE_URL}/primary-concerns`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ primaryConcern }),
    });

    if (!response.ok) {
        const data = await response.json();
        throw new Error(data.message || 'Failed to create primary concern');
    }

    return response.json();
};

