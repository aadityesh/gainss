

const key = import.meta.env.VITE_API_KEY

const exerciseOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': key,
        'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
    }
};

const videoOptions = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': '2212bab452msha4455d36c5ea7efp10685cjsn32d723a93b64',
        'x-rapidapi-host': 'youtube-search-and-download.p.rapidapi.com'
    }
};

export const fetchData = async (url) => {
    const BASE_URL = import.meta.env.VITE_API_BASE_URL
    const response = await fetch(`${BASE_URL}/${url}`, exerciseOptions);
    const data = await response.json()
    // console.log(BASE_URL);
    // console.log(key);
    return data
}

export const fetchYTData = async (url) => {
    const BASE_URL = import.meta.env.VITE_VIDEO_BASE_URL
    const response = await fetch(`${BASE_URL}/${url}`, videoOptions);
    const data = await response.json()
    // console.log(BASE_URL);
    // console.log(key);
    return data
}