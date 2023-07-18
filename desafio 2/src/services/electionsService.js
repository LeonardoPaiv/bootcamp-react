import { httpGet } from "./httpClient";

export const getAllData = async () => {
    const allRequests = await Promise.all([
        httpGet('cities'),
        httpGet('candidates'),
        httpGet('election'),
    ])

    return allRequests;
}

export const getCities = async () => {
    const cities = await httpGet('cities');
    return cities;
}

export const getCandidates = async () => {
    const cities = await httpGet('candidates');
    return cities;
}

export const getElections = async () => {
    const cities = await httpGet('election');
    return cities;
}