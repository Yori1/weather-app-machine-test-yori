export interface DirectGeocodingResult {
    name: string
    local_names: {
        en: string
    }
    country: string
    state: string
    lat: number
    lon: number
}