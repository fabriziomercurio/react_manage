const baseUrl = import.meta.env.VITE_BASE_URL

export async function getProducts() 
{
    const response = await fetch(`${baseUrl}/products`);    

    if (!response.ok) {
        const errorData = await response.json().catch(() => null);

        throw new Error(
            errorData?.error || `HTTP ${response.status} - Error fetching products`
        );
    }

    return response.json() 
}