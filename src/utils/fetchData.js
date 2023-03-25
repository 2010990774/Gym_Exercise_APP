export const exerciseOptions = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '931cf01a86mshc5756febd15a6e9p12dab2jsna3818a013d99',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
    }
};

export const youtubeOptions = {
    method: 'GET',
    params: { id: 'UCE_M8A5yxnLfW0KghEeajjw' },
    headers: {
        'X-RapidAPI-Key': 'd8d325539amshae2b8b230a890ebp1687fbjsn888fd34b0cde',
        'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url, options) => {
    const response = await fetch(url, options);
    const data = await response.json();

    return data;
}